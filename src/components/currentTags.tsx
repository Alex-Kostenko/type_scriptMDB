import React from 'react';
import styled from 'styled-components';
import { genre } from '../models/interfaces'

type RenderTagsProps = {
  genres: genre[];
};

const RenderTags: React.FC<RenderTagsProps> = ({ genres }) => {

  return (
    <StyledSection>
      {genres.map((item: genre) => <Tag key={item.id}> {item.name} </Tag>)}
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
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: center;
`;

export default RenderTags;
