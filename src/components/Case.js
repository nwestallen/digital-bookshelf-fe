import React from 'react';
import styled from 'styled-components';
import Shelf from './Shelf';

const CaseDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  /* border: 2px solid red; */
  width: 500px;
`

const Case = props =>  {

  const { shelves } = props;

  return (
    <CaseDiv>
      {shelves.map(shelf => <Shelf books={ shelf.books }/>)}
    </CaseDiv>
  )
};

export default Case;
