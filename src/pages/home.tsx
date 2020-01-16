import React, {useState, useEffect, ChangeEvent} from 'react';
import { Segment, Input, Button, Select } from 'semantic-ui-react'
import styled from 'styled-components';

import { genre, post } from '../models/routs'
import { searchMovie, getGenre } from '../api'


const Home: React.FC = ( ) => {
  const [data, setData] = useState<post[]>([]);
  const [genre, setGenre] = useState<genre[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    getGenre(setGenre)
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
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
        <select>
          {genre.map(item => 
            <option value={item.id}>
              {item.name}
            </option>
          )}
        </select> 
        <Button>Genre</Button>
        <Button>Genre</Button>
      </Paper>
      <div>
        {data.length >= 10 && data.map(item => {
          return (
            <Paper>
              {console.log(item)}
              <img src={`http://image.tmdb.org/t/p/w342${item.poster_path}`} alt=""/>
            </Paper>
          )
        })}
      </div>
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
`;

const Search = styled(Input)`
  width: 100%;
`;

export default Home;
