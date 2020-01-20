import React, { useState, useEffect, ChangeEvent} from 'react';
import { Segment, Input, Item } from 'semantic-ui-react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import { withRouter } from 'react-router';
import { useHistory } from "react-router-dom";

import { genre as genryInt, searchRes, withRouterProps } from '../models/interfaces';
import { searchMovie, getGenre } from '../api';
import Loader from '../components/loader';
import MovieCard from '../components/movieCard';

interface propsType extends withRouterProps {
  [key: string]: any;
};


const Home: React.FC<any> = (props: propsType) => {
  const history = useHistory();

  const [data, setData] = useState<searchRes>();
  const [page, setPage] = useState<number>(1);
  const [genre, setGenre] = useState<genryInt[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    const path = (props.location.search).split('=')[1];
    if( path ) {
      searchMovie(path, setData);
      setSearchValue(path)
    } else {
      getGenre(setGenre);
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  const handleClickSearch = (e: MouseEvent) => {
    searchMovie(searchValue, setData);
    if (searchValue) {
      return history.push(`/?search=${searchValue}`)
    }
    history.push(`/`)
  }

  return (
    <StyledSection> 
      <Paper>
        <SearchInput
          value={searchValue}
          action={{
            icon: "search",
            onClick: (e: MouseEvent) => handleClickSearch(e)
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
              const nextPage = page + 1;
              // get Promise from service
              // and subscribe to it here
              searchMovie(searchValue, setData, nextPage, data , setPage);
            }}
            hasMore={data.total_pages > page}
            loader={<Loader key={'loader'} />}
          >
            Total results: {data.total_results}
            {data?.results.map(item =>
              <MovieCard key={item.id} item={item} genre={genre} />
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
  flex-direction: column;
`;

const SearchInput = styled(Input)`
  width: 100%;
`;

export default withRouter(Home);
