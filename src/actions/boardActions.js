import { ADD_BOARD, DELETE_BOARD } from '../constants/boardConstants';

export const addBoard = name => ({ type: ADD_BOARD, name });
export const deleteBoard = id => ({ type: DELETE_BOARD, id });
