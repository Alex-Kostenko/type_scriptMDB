import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';


const Loader = () =>
  <WrapLoad>
    <Icon loading name='redo' />
  </WrapLoad>

const WrapLoad = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f1f180
`;

export default Loader;
