// import { addBoard } from "../actions";
import { ADD_BOARD, DELETE_BOARD } from '../constants/boardConstants';
import { ADD_LIST, DELETE_LIST } from '../constants/activeBoardConstants';

import { v4 } from 'uuid';

const initialState = () => {
  let info = {};
  if (localStorage.getItem('boards') === null) {
    const firstId = v4();
    info = {
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
    const serialBoards = JSON.stringify(info);

    localStorage.setItem('boards', serialBoards);
  } else {
    info = JSON.parse(localStorage.getItem('boards'));
  }

  return info;
};

function reducer(state = initialState(), action) {
  switch (action.type) {
    case ADD_BOARD:
      const newId = v4();
      return Object.assign({}, state, {
        boards: {
          byIds: {
            ...state.boards.byIds,
            [newId]: {
              id: newId,
              name: action.name,
              lists: []
            }
          },
          allIds: [...state.boards.allIds, newId]
        }
      });
    case DELETE_BOARD:
      const { boards } = state;
      delete boards.byIds[action.id];
      boards.allIds.splice(boards.allIds.indexOf(action.id), 1);

      return Object.assign({}, state, {
        boards: { ...boards }
      });
    case ADD_LIST:
      const newListId = v4();
      return Object.assign({}, state, {
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
      });
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
