import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from  'react-router';
import { getMovieById } from '../api';
import { withRouterProps, movieProps } from '../models/interfaces';
import RenderCurrentMovie from '../components/moviePageComponent';

interface propsType extends withRouterProps {
  [key: string]: any;
};


const MovieList: React.FC<any> = (props: propsType) => {
  const [data, setData] = useState<movieProps[]>();

  useEffect(() => {
    getMovieById(props.match.params.id)
      .then((res: any) => setData(res[0]));
  }, [props.match.params.id]);

  return (
    <StyledSection>
      {data && <RenderCurrentMovie item={data}/>}
    </StyledSection>
  );
}

const StyledSection = styled.div`
  display: flex;
`;

export default withRouter(MovieList);
