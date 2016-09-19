import React from 'react';
//import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
//import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

/*
const TodoList = ({teams, remove}) => {
  // Map through the todos
  const teamNode = teams.map((team, index) => {
    return (<li onClick={() => {remove(index)}} key={index}>
      {team.teamIndex}:{team.name}:{team.min}:{team.max}:{team.members}</li>)
  });
  return (<ul>{teamNode}</ul>);
}

export default TodoList;
*/


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '0 10px',
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: 'auto',
    marginBottom: 24,
  },
  hide: {
    display: 'none',
  },
};

const TodoList = ({teams, remove}) => {
  // Map through the todos
  const teamNode = teams.map((team, index) => {
    return (
      <GridTile
        key={index}
        title={team.name || " "}
        subtitle={<span>team has <b>{team.members}</b> members.</span>}
        actionIcon={<IconButton
            onClick={() => { remove(index) } }>
          <DeleteIcon
            color="white"
            onClick={() => { remove(index) } }
            />
        </IconButton>}
        >
        <p>
          This team needs at least {team.min} and at most {team.max} members.<br/>
          It has {team.members} right now.
        </p>
      </GridTile>
    )

  });
  //return (<div>{teamNode}</div>);
  return (
    <div style={teams.length > 0 ? styles.root : styles.hide}>
      <GridList
        cellHeight={200}
        style={styles.gridList}
        >
        {teamNode}
      </GridList>
    </div>);
}

export default TodoList;

