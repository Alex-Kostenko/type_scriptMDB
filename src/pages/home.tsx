import React, { useState, useEffect, ChangeEvent} from 'react';
import { Segment, Input, Item } from 'semantic-ui-react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';

import { genre as genryInt, searchRes } from '../models/interfaces'
import { searchMovie, getGenre } from '../api'
import Loader from '../components/loader'
import MovieCard from '../components/movieCard'


const Home: React.FC = ( ) => {
  const [data, setData] = useState<searchRes>();
  const [page, setPage] = useState<number>(1);
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
          {data !== undefined && <InfiniteScroll
            pageStart={1}
            loadMore={() => {
              searchMovie(search, setData, page + 1, data , setPage);
            }}
            hasMore={data.total_pages > page ? true : false}
            loader={<Loader key={'loader'} />}
          >
            Total results: {data.total_results}
            {data?.results.map(item =>
              <MovieCard item={item} genre={genre}/>
            )}
          </InfiniteScroll>
          }
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

const Search = styled(Input)`
  width: 100%;
`;

export default Home;
