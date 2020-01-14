import React, { useState, useEffect} from 'react';
import styled from 'styled-components';


const Template: React.FC = ( ) => {
  const [data, setData] = useState('');

  useEffect(() => {
    console.log(data);
    setData('');
  }, []);

  return (
    <StyledSection> 
      Template
    </StyledSection>
  );
}

const StyledSection = styled.div`
  display: flex;
`;

export default Template;
