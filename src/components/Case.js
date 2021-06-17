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
  return (
    <CaseDiv>
      <Shelf />
      <Shelf />
    </CaseDiv>
  )
};

export default Case;
