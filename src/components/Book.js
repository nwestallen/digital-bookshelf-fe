import React from 'react';
import styled from 'styled-components';

const BookDiv = styled.div`
  color: white;
  writing-mode: vertical-rl;
  padding: 10px;
  width: 12.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  height: 98%;

  ${props => (`background: ${props.bookColor}`)}
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

