import React from 'react';
import styled from 'styled-components';
import { genre, post } from '../models/inrerfaces'

type RenderTagsProps = {
  tagList: genre[];
  idGenreItem: post['genre_ids'];
}

const RenderTags: React.FC<RenderTagsProps> = ({tagList, idGenreItem} ) => {

  return (
    <StyledSection>
      {idGenreItem.map(item => {
        return tagList.map((tag, i ) => {
          return (item === tag.id ? <Tag> {tag.name} </Tag> : null)
        })})}
    </StyledSection>
  );
}

const StyledSection = styled.div`
  display: flex;
`;

const Tag = styled.div`
  font-size: 14px;
  padding: 5px 10px;
  border: 1px solid #000;
  border-radius: 15px;
  margin-right: 5px;
`;

export default RenderTags;
