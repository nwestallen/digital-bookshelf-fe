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
  height: 250px;
  border-radius: 3px;

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

