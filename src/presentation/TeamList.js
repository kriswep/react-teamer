import React from 'react';


const TodoList = ({teams, remove}) => {
  // Map through the todos
  const teamNode = teams.map((team, index) => {
    return (<li onClick={() => {remove(index)}} key={index}>
      {team.name}:{team.min}:{team.max}</li>)
  });
  return (<ul>{teamNode}</ul>);
}

export default TodoList;

