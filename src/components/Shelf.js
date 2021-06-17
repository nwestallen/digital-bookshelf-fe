import React from 'react';
import styled from 'styled-components';
import Book from './Book';

const ShelfDiv = styled.div`
  display: flex;
  width: 500px;
  height: 275px;
  border: 20px solid brown;
  margin: auto;
  background-color: black;
  align-items: flex-end;
`

const Shelf = props =>  {
  return (
    <ShelfDiv>
      <Book title='Wealth of Nations' />
    </ShelfDiv>
  )
};

export default Shelf;
