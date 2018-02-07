import React from 'react';
import { Link } from 'react-router-dom';

import CreateBoard from './CreateBoard/CreateBoard';
import Board from './Board/Board';

import './AllBoards.css';

const AllBoard = ({ boards, addBoard, deleteBoard }) => {
  const boardsList = boards.allIds.map(boardId => (
    <Link
      to={`/board/${boards.byIds[boardId].id}`}
      key={boards.byIds[boardId].id}
      className="AllBoards__board"
    >
      <Board {...boards.byIds[boardId]} deleteBoard={deleteBoard} />
    </Link>
  ));

  return (
    <div className="AllBoards">
      <CreateBoard className="AllBoards__board" addNewBoard={addBoard} />
      {boardsList}
    </div>
  );
};

export default AllBoard;
