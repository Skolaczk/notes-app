import { types } from 'constant/Constant';
import { v4 as uuid } from 'uuid';

export const removeNote = (payload) => {
  return {
    type: types.REMOVE_NOTE,
    payload,
  };
};

export const addNote = (payload) => {
  return {
    type: types.ADD_NOTE,
    payload: {
      id: uuid(),
      ...payload,
    },
  };
};

export const findNote = (payload) => {
  return {
    type: types.FIND_NOTE,
    payload,
  };
};

export const findNoteIndex = (payload) => {
  return {
    type: types.FIND_NOTE_INDEX,
    payload,
  };
};

export const clearCurrentNoteIndex = () => {
  return {
    type: types.CLEAR_CURRENT_NOTE_INDEX,
  };
};

export const editNote = (payload) => {
  return {
    type: types.EDIT_NOTE,
    payload: {
      id: uuid(),
      ...payload,
    },
  };
};
