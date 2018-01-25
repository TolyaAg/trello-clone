// import { addBoard } from "../actions";
import { ADD_BOARD, DELETE_BOARD } from '../constants/boardConstants';
import { ADD_LIST, DELETE_LIST } from '../constants/activeBoardConstants';

import { v4 } from 'uuid';

const initialState = () => {
  let state = {};
  if (localStorage.getItem('boards') === null) {
    state = {
      boards: [
        {
          id: v4(),
          name: 'First'
        }
      ],
      lists: [],
      tasks: []
    };
    const serialBoards = JSON.stringify(state);

    localStorage.setItem('boards', serialBoards);
  } else {
    state = JSON.parse(localStorage.getItem('boards'));
  }

  return state;
};

const deleteItem = (items, id) => {
  let index = null;

  for (let i = 0; i < items.length; i++) {
    if (items[i].id === id) {
      index = i;
      break;
    }
  }

  items.splice(index, 1);

  return items;
};

function reducer(state = initialState(), action) {
  switch (action.type) {
    case ADD_BOARD:
      return Object.assign({}, state, {
        boards: [
          ...state.boards,
          {
            id: v4(),
            name: action.name
          }
        ]
      });
    case DELETE_BOARD:
      return Object.assign({}, state, {
        boards: [...deleteItem(state.boards, action.id)]
      });
    case ADD_LIST:
      return Object.assign({}, state, {
        lists: [
          ...state.lists,
          {
            id: v4(),
            boardId: action.boardId,
            name: action.name
          }
        ]
      });
    case DELETE_LIST:
      return Object.assign({}, state, {
        lists: [...deleteItem(state.lists, action.id)]
      });
    default:
      return state;
  }
}

export default reducer;
