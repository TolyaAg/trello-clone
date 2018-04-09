import { ADD_LIST, DELETE_LIST } from '../constants/activeBoardConstants';
import { v4 } from 'uuid';

export const addList = (boardId, name) => ({ type: ADD_LIST, boardId, name, id: v4() });
export const deleteList = (id, boardId)  => ({ type: DELETE_LIST, id, boardId });
