import React from 'react';
import styled from 'styled-components';
import Book from './Book';

const ShelfDiv = styled.div`
  display: flex;
  width: 90%;
  height: 275px;
  border: 20px solid #895b1eff;
  background-color: black;
  align-items: flex-end;
`

const Shelf = props =>  {

  const { books } = props;

  return (
    <ShelfDiv>
      {books.map(book => <Book title={book.title} bookColor={book.color}/>)}
    </ShelfDiv>
  )
};

export default Shelf;
