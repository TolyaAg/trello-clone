// import { addBoard } from "../actions";
import { ADD_BOARD, DELETE_BOARD } from '../constants/boardConstants';
import { ADD_LIST, DELETE_LIST } from '../constants/activeBoardConstants';
import { ADD_TASK, DELETE_TASK, CHANGE_STATUS } from '../constants/listConstants';

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

const boardReducer = (boards, action) => {
  switch (action.type) {
    case ADD_BOARD: {

      const byIds =  {
        ...boards.byIds,
        [action.id]: { id: action.id, name: action.name, lists: [] }
      };

      const allIds = [
        ...boards.allIds,
        action.id
      ];

      return {
        byIds,
        allIds
      };
    }

    case DELETE_BOARD: {

      const byIds  = omit(action.id)(boards.byIds);
      const allIds = boards.allIds.filter((id) => id !== action.id);

      return {
        byIds,
        allIds
      };
    }

    case ADD_LIST: {

      const byIds = {
        ...boards.byIds,
        [action.boardId]: {
          ...boards.byIds[action.boardId],
          lists: [...boards.byIds[action.boardId].lists, action.id]
        }
      }
    
      return {
        ...boards,
        byIds
      };
    }

    case DELETE_LIST: {
      const byIds = {
        ...boards.byIds,
        [action.boardId]: {
          ...boards.byIds[action.boardId],
          lists: boards.byIds[action.boardId].lists.filter(id => id !== action.id)
        }
      }

      return {
        ...boards,
        byIds
      };
    }

    default: {
      return boards;
    }
  }
}

const listReducer = (lists, action) => {
  switch(action.type) {
    case ADD_LIST: {
      const byIds = {
        ...lists.byIds,
        [action.id]: {
          id: action.id,
          name: action.name,
          boardId: action.boardId,
          tasks: []
        }
      }

      const allIds = [...lists.allIds, action.id]

      return {
        byIds,
        allIds
      };
    }

    case DELETE_LIST: {
      const byIds  = omit(action.id)(lists.byIds);
      const allIds = lists.allIds.filter((id) => id !== action.id);

      return {
        byIds,
        allIds
      };
    }

    case ADD_TASK: {
      const byIds = {
        ...lists.byIds,
        [action.listId]: {
          ...lists.byIds[action.listId],
          tasks: [...lists.byIds[action.listId].tasks, action.id]
        }
      }
    
      return {
        ...lists,
        byIds
      };
    }

    case DELETE_TASK: {
      const byIds = {
        ...lists.byIds,
        [action.listId]: {
          ...lists.byIds[action.listId],
          tasks: lists.byIds[action.listId].tasks.filter((id) => id !== action.id)
        }
      }

      return {
        ...lists,
        byIds
      };
    }

    default: {
      return lists;
    }
  }
}

const taskReducer = (tasks, action) => {
  switch(action.type) {
    case ADD_TASK: {
      const byIds = {
        ...tasks.byIds,
        [action.id]: {
          id: action.id,
          name: action.name,
          complited: false
        }
      }

      const allIds = [...tasks.allIds, action.id]

      return {
        byIds,
        allIds
      };
    }

    case DELETE_TASK: {
      const byIds  = omit(action.id)(tasks.byIds);
      const allIds = tasks.allIds.filter((id) => id !== action.id);

      return {
        byIds,
        allIds
      };
    }

    case CHANGE_STATUS: {
      const byIds = {
        ...tasks.byIds,
        [action.id]: {
          ...tasks.byIds[action.id],
          complited: !tasks.byIds[action.id].complited
        }
      }

      return {
        ...tasks,
        byIds
      };
    }
    default: {
      return tasks
    }
  }
}

function reducer(state = initialState(), action) {
  switch (action.type) {
    case ADD_BOARD: {
      return {
        ...state,
        boards: boardReducer(state.boards, action)
      };
    }
    case DELETE_BOARD: {
      return {
        ...state,
        boards: boardReducer(state.boards, action)
      };
    }
    case ADD_LIST: {
      return {
        ...state,
        boards: boardReducer(state.boards, action),
        lists: listReducer(state.lists, action)
      };
    }
    case DELETE_LIST: {
      return {
        ...state,
        boards: boardReducer(state.boards, action),
        lists: listReducer(state.lists, action)
      };
    }

    case ADD_TASK: {
      return {
        ...state,
        lists: listReducer(state.lists, action),
        tasks: taskReducer(state.tasks, action)
      }
    }

    case DELETE_TASK: {
      return {
        ...state,
        lists: listReducer(state.lists, action),
        tasks: taskReducer(state.tasks, action)
      }
    }

    case CHANGE_STATUS: {
      return {
        ...state,
        tasks: taskReducer(state.tasks, action)
      }
    }

    default:
      return state;
  }
}

export default reducer;
