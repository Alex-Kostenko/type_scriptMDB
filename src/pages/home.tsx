import React, {useState, useEffect, ChangeEvent} from 'react';
import { Segment, Input, Item } from 'semantic-ui-react';
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';

import { genre as genryInt, post } from '../models/interfaces'
import { searchMovie, getGenre } from '../api'
import RenderTags from '../components/tags'


const Home: React.FC = ( ) => {
  const [data, setData] = useState<post[]>([]);
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
        {/* <select>
          {genre.map(item => 
            <option value={item.id}>
              {item.name}
            </option>
          )}
        </select> 
        <Button>Genre</Button>
        <Button>Genre</Button> */}
      </Paper>
      <Item.Group>
        <Post>
          {data.length >= 10 && data.map(item => {
            return (
              <Paper>
                  {console.log(item)}
                <img 
                  src={
                    item.poster_path ? `http://image.tmdb.org/t/p/w342${item.poster_path}` 
                    : 'https://via.placeholder.com/342x500'} 
                  alt="" 
                  style={{marginRight: '14px'}}
                />
                <Item.Content>
                  <Title as='a'> 
                    <div style={{marginBottom: '10px'}}>{item.title}</div>
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
            )
          })}
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
