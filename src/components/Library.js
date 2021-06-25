import React, { useState, useEffect } from 'react';
import Case from './Case';
import styled from 'styled-components';
import axios from 'axios';

const demoCases = [
  { case_id: 1, shelves: [
    { shelf_id: 1, books: [{title: 'Moby Dick', color: 'navy'}, {title: 'The Old Man and the Sea', color: 'grey'}]},
    { shelf_id: 2, books: [{title: 'The Wealth of Nations', color: 'teal'}]},
    { shelf_id: 5, books: []}
  ]},
  {case_id: 2, shelves: [
    { shelf_id: 3, books: []},
    { shelf_id: 4, books: [{title: 'Strucutre and Interpretation of Computer Programs', color:'red'}]}
  ]}
  ]

const LibDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 90%;
  margin: auto;
  background-color: beige;
  /* border: 2px solid blue; */
`

const Library = props => {

  const [ cases, setCases ] = useState(demoCases);
  const user_id = 1;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/books/${user_id}/library`)
      .then(library => { 
        setCases(library.data)
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <LibDiv>
      {cases.map((casedata) => <Case shelves={casedata.shelves}/>)}
    </LibDiv>
    
  )
};

export default Library;
