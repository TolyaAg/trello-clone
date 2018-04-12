import { ADD_TASK, DELETE_TASK, CHANGE_STATUS } from '../constants/listConstants';
import { v4 } from 'uuid';

export const addTask = (name, listId) => ({ type: ADD_TASK, name, id: v4(), listId });
export const deleteTask = (id, listId) => ({ type: DELETE_TASK, id, listId });
export const changeStatus = id => ({type: CHANGE_STATUS, id})