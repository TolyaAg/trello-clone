import { ADD_LIST, DELETE_LIST } from '../constants/activeBoardConstants';
import { ADD_TASK, DELETE_TASK } from '../constants/listConstants';

const lists = (state = { byIds: {}, allIds: [] }, action) => {
  switch(action.type) {
    case ADD_LIST: {
      const byIds = {
        ...state.byIds,
        [action.id]: {
          id: action.id,
          name: action.name,
          boardId: action.boardId,
          tasks: []
        }
      }

      const allIds = [...state.allIds, action.id]

      return {
        byIds,
        allIds
      };
    }

    case DELETE_LIST: {
      const { [action.id]: removedId, ...byIds } = state.byIds;
      const allIds = state.allIds.filter((id) => id !== action.id);

      return {
        byIds,
        allIds
      };
    }

    case ADD_TASK: {
      const byIds = {
        ...state.byIds,
        [action.listId]: {
          ...state.byIds[action.listId],
          tasks: [...state.byIds[action.listId].tasks, action.id]
        }
      }

      return {
        ...state,
        byIds
      };
    }

    case DELETE_TASK: {
      const byIds = {
        ...state.byIds,
        [action.listId]: {
          ...state.byIds[action.listId],
          tasks: state.byIds[action.listId].tasks.filter((id) => id !== action.id)
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

export default lists;
