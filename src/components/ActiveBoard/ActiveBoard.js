import React from 'react';
import { Link } from 'react-router-dom';

import List from '../../containers/ListContainer';
import CreateList from './CreateList/CreateList';

import './ActiveBoard.css';

const ActiveBoard = ({ lists, addList, deleteList, tasks, boardId }) => {
  const listsItem = lists.map(listId => (
    <List
      boardId={boardId}
      key={listId}
      deleteList={deleteList}
      id={listId}
    />
  ));

  return (
    <div className="ActiveBoard">
      <Link to="/">
        <button className="ActiveBoard__button-back">Back</button>
      </Link>
      {listsItem}
      <CreateList addNewList={addList} boardId={boardId} />
    </div>
  );
}

export default ActiveBoard;
