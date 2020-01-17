import React from 'react';
import styled from 'styled-components';
import { Segment, Input, Item } from 'semantic-ui-react';
import StarRatingComponent from 'react-star-rating-component';

import RenderTags from '../components/tags';
import { post, genre } from "../models/interfaces";

interface MovieCardProps {
  item: post;
  genre: genre[];
}

const MovieCard: React.FC<MovieCardProps> = ({ item, genre }) => {

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

  return(
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
  );
}

export default MovieCard;
