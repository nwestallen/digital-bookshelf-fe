import React from 'react';
import styled from 'styled-components';
import Shelf from './Shelf';

const CaseDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  /* border: 2px solid red; */
  min-width: 475px;
  box-shadow: -5px -5px #5C4033;
  padding: 0px
`

const Case = props =>  {

  const { shelves } = props;

  return (
    <CaseDiv>
      {shelves.map(shelf => <Shelf books={ (shelf.books ? shelf.books : []) }/>)}
    </CaseDiv>
  )
};

export default Case;
