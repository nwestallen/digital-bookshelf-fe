import React from 'react';
import Case from './Case';
import styled from 'styled-components';

const LibDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 90%;
  /* border: 2px solid blue; */
`

const Library = props => {
  return (
    <LibDiv>
      <Case />
      <Case />
    </LibDiv>
  )
};

export default Library;
