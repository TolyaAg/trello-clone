import React from 'react';

import './Board.css';

const Board = ({ deleteBoard, name, className, id }) => {
  return (
    <div className={`Board ${className}`}>
      {name}
      <button
        className="Board__delete-button"
        onClick={e => {
          e.preventDefault();
          deleteBoard(id);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Board;
