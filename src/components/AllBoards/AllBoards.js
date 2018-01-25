import React from 'react';
import { Link } from 'react-router-dom';

import CreateBoard from './CreateBoard/CreateBoard';
import Board from './Board/Board';

import './AllBoards.css';

const AllBoard = ({ boards, addBoard, deleteBoard }) => {
  const boardsList = boards.map(board => (
    <Link to={`/board/${board.id}`} key={board.id} className="AllBoards__board">
      <Board {...board} deleteBoard={deleteBoard} />
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
