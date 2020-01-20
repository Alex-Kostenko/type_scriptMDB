import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Segment, Item } from 'semantic-ui-react';
import StarRatingComponent from 'react-star-rating-component';

import RenderTags from './currentTags';
import { post, movieProps } from "../models/interfaces";

interface RenderCurrentMovieProps {
  item: movieProps
}

const IMAGE_FALLBACK = 'https://via.placeholder.com/342x500';

const RenderCurrentMovie: React.FC<any> = ({ item }: RenderCurrentMovieProps)  => {
  const getImageFallback = (url: post["poster_path"]) => {
    return url || IMAGE_FALLBACK;
  };

  return (
    <Paper key={item.id}>
      <img
        src={getImageFallback(item.poster_path && `http://image.tmdb.org/t/p/w342${item.poster_path}`)}
        alt="posterImg"
        style={{ marginRight: '14px' }}
      />
      <Item.Content>
        <Title as='div'>
          <Link to={`/movie/${item.id}`} style={{ marginBottom: '10px', lineHeight: '1.1' }}>
            {item.title}
          </Link>
          <Text> {item.tagline} </Text>
          <StarRatingComponent
            value={item.vote_average / 2}
            editing={false}
            starCount={5}
            name='rating'
          />
        </Title>
        <RenderTags genres={item.genres}/>
        <Text> Status: {item.status} </Text>
        <Text> Date of release: {item.release_date} </Text>
        <Text> Budget: {item.budget} $</Text>
        <Text> Runtime: {item.runtime} min</Text>
        <Text> {item.overview} </Text>
        <Text> <a href={`http://https://www.imdb.com/title/${item.imdb_id}`}> IMDB </a> </Text>
        <Text> <a href={item.homepage}> Homepage </a> </Text>
      </Item.Content>
    </Paper>
  );
}

const Paper = styled(Segment)`
  width: 100%;
  display: flex;
  align-items: flex-start;
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
  line-height: 2em !important;
`;

export default RenderCurrentMovie;
