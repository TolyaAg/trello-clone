// import { addBoard } from "../actions";
import { ADD_BOARD, DELETE_BOARD } from '../constants/boardConstants';
import { ADD_LIST, DELETE_LIST } from '../constants/activeBoardConstants';

import { v4 } from 'uuid';

const omit = require('lodash/fp/omit');

const initialState = () => {
  const firstId = v4();
  const info = {
    boards: {
      byIds: {
        [firstId]: {
          id: firstId,
          name: 'First',
          lists: []
        }
      },
      allIds: [firstId]
    },
    lists: { byIds: {}, allIds: [] },
    tasks: { byIds: {}, allIds: [] }
  };

  return info;
};

function boardReducer(boards, action) {
  switch (action.type) {
    case ADD_BOARD: {
      const newId = v4();

      const byIds =  {
        ...boards.byIds,
        [newId]: { id: newId, name: action.name, lists: [] }
      };

      const allIds = [
        ...boards.allIds,
        newId
      ];

      return {
        ...boards,
        byIds: byIds,
        allIds: allIds
      };
    }
    case DELETE_BOARD: {
      const byIds  = omit(action.id)(boards.byIds);
      // delete byIds[action.id];
      const allIds = boards.allIds.filter((id) => id !== action.id);

      return {
        ...boards,
        byIds: byIds,
        allIds: allIds
      }
    }
    default: {
      return boards;
    }
  }
}

function reducer(state = initialState(), action) {
  switch (action.type) {
    case ADD_BOARD:
      return {
        ...state,
        boards: boardReducer(state.boards, action)
      };
    case DELETE_BOARD:
      return {
        ...state,
        boards: boardReducer(state.boards, action)
      };
    case ADD_LIST:
      const newListId = v4();
      return {
        ...state,
        boards: {
          byIds: {
            ...state.boards.byIds,
            [action.boardId]: {
              ...state.boards.byIds[action.boardId],
              lists: [...state.boards.byIds[action.boardId].lists, newListId]
            }
          },
          allIds: [...state.boards.allIds]
        },
        lists: {
          byIds: {
            ...state.lists.byIds,
            [newListId]: {
              id: newListId,
              name: action.name,
              boardId: action.boardId,
              tasks: []
            }
          },
          allIds: [...state.lists.allIds, newListId]
        }
      };
    case DELETE_LIST: {
        const {lists, boards} = state;
        const boardId = lists.byIds[action.id].boardId;
        const boardLists = boards.byIds[boardId].lists;

        lists.allIds.splice(lists.allIds.indexOf(action.id), 1);
        boardLists.splice(boardLists.indexOf(action.id), 1);

        delete lists.byIds[action.id];

        return Object.assign({}, state, {
            boards: {...boards},
            lists: {...lists}
        });
    }
    default:
      return state;
  }
}

export default reducer;
