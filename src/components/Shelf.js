import React from 'react';
import styled from 'styled-components';
import Book from './Book';

const ShelfDiv = styled.div`
  display: flex;
  width: 92%;
  height: 275px;
  border: 20px solid #895b1eff;
  background-color: black;
  align-items: flex-end;
  border-radius: 2px;
`

const Shelf = props =>  {

  const { books } = props;

  return (
    <ShelfDiv>
      {books.map(book => <Book title={book.book_title} bookColor={book.book_color}/>)}
    </ShelfDiv>
  )
};

export default Shelf;
