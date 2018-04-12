import { ADD_TASK, DELETE_TASK, CHANGE_STATUS } from '../constants/listConstants';

const tasks = (state = { byIds: {}, allIds: [] }, action) => {
  switch(action.type) {
    case ADD_TASK: {
      const byIds = {
        ...state.byIds,
        [action.id]: {
          id: action.id,
          name: action.name,
          complited: false
        }
      }

      const allIds = [...state.allIds, action.id]

      return {
        byIds,
        allIds
      };
    }

    case DELETE_TASK: {
      const { [action.id]: removedId, ...byIds } = state.byIds;
      const allIds = state.allIds.filter((id) => id !== action.id);

      return {
        byIds,
        allIds
      };
    }

    case CHANGE_STATUS: {
      const byIds = {
        ...state.byIds,
        [action.id]: {
          ...state.byIds[action.id],
          complited: !state.byIds[action.id].complited
        }
      }

      return {
        ...state,
        byIds
      };
    }
    default: {
      return state
    }
  }
}

export default tasks;
