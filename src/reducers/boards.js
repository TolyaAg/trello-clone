import { ADD_BOARD, DELETE_BOARD } from '../constants/boardConstants';
import { ADD_LIST, DELETE_LIST } from '../constants/activeBoardConstants';

import { v4 } from 'uuid';

const initialState = () => {
  const id = v4();
  const boards = {
    byIds: {
      [id]: {
        id: id,
        name: 'First',
        lists: []
      }
    },
    allIds: [id]
  };

  return boards;
};

const boards = (state = initialState(), action) => {
  switch (action.type) {
    case ADD_BOARD: {

      const byIds =  {
        ...state.byIds,
        [action.id]: { id: action.id, name: action.name, lists: [] }
      };

      const allIds = [
        ...state.allIds,
        action.id
      ];

      return {
        byIds,
        allIds
      };
    }

    case DELETE_BOARD: {

      const { [action.id]: removedId, ...byIds } = state.byIds;
      const allIds = state.allIds.filter((id) => id !== action.id);

      return {
        byIds,
        allIds
      };
    }

    case ADD_LIST: {

      const byIds = {
        ...state.byIds,
        [action.boardId]: {
          ...state.byIds[action.boardId],
          lists: [...state.byIds[action.boardId].lists, action.id]
        }
      }

      return {
        ...state,
        byIds
      };
    }

    case DELETE_LIST: {
      const byIds = {
        ...state.byIds,
        [action.boardId]: {
          ...state.byIds[action.boardId],
          lists: state.byIds[action.boardId].lists.filter(id => id !== action.id)
        }
      }

      return {
        ...state,
        byIds
      };
    }

    default: {
      return state;
    }
  }
}

export default boards;
