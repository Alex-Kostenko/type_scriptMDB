import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from  'react-router'

// import { searchMovie } from '../api';

const MovieList: React.FC = (props) => {
  const [data, setData] = useState('');
  console.log(props);

  useEffect(() => {
    console.log(data);
    setData('');
  }, [data]);

  return (
    <StyledSection>
      Template
    </StyledSection>
  );
}

const StyledSection = styled.div`
  display: flex;
`;

export default withRouter(MovieList);
