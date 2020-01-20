import React from 'react';
import styled from 'styled-components';
import { Segment, Item } from 'semantic-ui-react';
import StarRatingComponent from 'react-star-rating-component';

import RenderTags from '../components/tags';
import { post, genre } from "../models/interfaces";

interface MovieCardProps {
  item: post;
  genre: genre[];
}

const IMAGE_FALLBACK = 'https://via.placeholder.com/342x500';

const MovieCard: React.FC<MovieCardProps> = ({ item, genre }) => {
  const getImageFallback = (url: post["poster_path"]) => {
    return url || IMAGE_FALLBACK;
  }

  return (
    <Paper key={item.id}>
      <img
        src={getImageFallback(item.poster_path && `http://image.tmdb.org/t/p/w342${item.poster_path}`)}
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
  );
}

const Paper = styled(Segment)`
  width: 100%;
  display: flex;
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

export default MovieCard;
