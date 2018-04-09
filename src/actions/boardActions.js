import { ADD_BOARD, DELETE_BOARD } from '../constants/boardConstants';
import { v4 } from 'uuid';

export const addBoard = name => ({ type: ADD_BOARD, name, id: v4() });
export const deleteBoard = id => ({ type: DELETE_BOARD, id });
