
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
    background-color: #42658aff;
    height: 250px;
`;

const  Book = props =>  {

    const { title } = props

    return (
        <BookDiv>
            {title}  
        </BookDiv>
    )
};

export default Book;

