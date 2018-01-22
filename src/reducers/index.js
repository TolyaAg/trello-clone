// import { addBoard } from "../actions";
import { ADD_BOARD } from '../constants';

import { v4 } from 'uuid';

const initialState = () => {
  if (localStorage.getItem('boards') === null) {
    const state = {
      boards: [
        {
          id: v4(),
          name: 'First'
        }
      ],
      lists: []
    };
    const serialBoards = JSON.stringify(state);

    localStorage.setItem('boards', serialBoards);

    return state;
  } else {
    const state = JSON.parse(localStorage.getItem('boards'));

    return state;
  }
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
    default:
      return state;
  }
}

export default reducer;
