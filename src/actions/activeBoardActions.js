import { ADD_LIST, DELETE_LIST } from '../constants/activeBoardConstants';

export const addList = (boardId, name) => ({ type: ADD_LIST, boardId, name });
export const deleteList = id => ({ type: DELETE_LIST, id });
