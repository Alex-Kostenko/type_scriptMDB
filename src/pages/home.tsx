import React, { useState, useEffect, ChangeEvent} from 'react';
import { Segment, Input, Item } from 'semantic-ui-react';
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';
import InfiniteScroll from 'react-infinite-scroller';

import { genre as genryInt, post } from '../models/interfaces'
import { searchMovie, getGenre } from '../api'
import RenderTags from '../components/tags'
import Loader from '../components/loader'


const Home: React.FC = ( ) => {
  const [data, setData] = useState<post[]>([]);
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState<genryInt[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    getGenre(setGenre)
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  return (
    <StyledSection> 
      <Paper >
        <Search 
          action={{
            icon: "search",
            onClick: () => searchMovie(search, setData)
          }}
          placeholder='Search' 
          onChange={handleChange}
        />
      </Paper>
      <Item.Group>
        <Post>
          <InfiniteScroll
            pageStart={1}
            loadMore={() => {
              data.length > 0 && searchMovie(search, setData, page + 1, data , setPage);
            }}
            hasMore={true}
            loader={data.length > 0 ? <Loader key={'loader'} /> : <React.Fragment key={'loader'}/>}
          >
            {data.length > 0 && data.map(item =>
              <Paper key={item.id}>
                <img
                  src={
                    item.poster_path ? `http://image.tmdb.org/t/p/w342${item.poster_path}`
                      : 'https://via.placeholder.com/342x500'}
                  alt=""
                  style={{ marginRight: '14px' }}
                />
                <Item.Content>
                  <Title as='a'>
                    <div style={{ marginBottom: '10px' }}>{item.title}</div>
                    <StarRatingComponent
                      value={item.vote_average / 2}
                      editing={false}
                      starCount={5}
                      name='rating'
                    />
                  </Title>
                  <RenderTags
                    tagList={genre}
                    idGenreItem={item.genre_ids}
                  />
                  <Text> Date of release: {item.release_date} </Text>
                  <Text> {item.overview} </Text>
                </Item.Content>
              </Paper>
            )}
          </InfiniteScroll>
          
        </Post>
      </Item.Group>
      
    </StyledSection>
  );
}

const StyledSection = styled.div`
  display: flex;
  min-height: 200px;
  margin-top: 50px;
  flex-direction: column;
`;

const Paper = styled(Segment)`
  width: 100%;
  display: flex;
`;

const Post = styled(Item)`
  display: flex;
  flex-direction: column
`;

const Title = styled(Item.Header)`
  font-size: 20pt;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 5px 0 15px 0;
  flex-wrap: wrap;
`;

const Text = styled(Item.Meta)`
  font-size: 14pt !important;
  line-height: 1.3em !important;
`;

const Search = styled(Input)`
  width: 100%;
`;

export default Home;
