
import React from 'react';
import styled from 'styled-components';

const BookDiv = styled.div`
  color: white;
  writing-mode: vertical-rl;
  padding: 10px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
  height: 250px;

  ${props => (props.bookColor === 'blue' ? `background: #42658aff`: null)}
  ${props => (props.bookColor === 'red' ? `background: red`: null)}
`;

const  Book = props =>  {

  const { title, bookColor } = props

  return (
    <BookDiv bookColor={ bookColor }>
      { title }  
    </BookDiv>
  )
};

export default Book;

