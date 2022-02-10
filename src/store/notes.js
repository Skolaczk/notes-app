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

const initialState = {
  currentNoteIndex: null,
  filteredNotes: [],
  notes: [
    {
      id: uuid(),
      title: 'Lorem ipsum',
      content: 'Lorem ipsum dolor sit amet',
    },
  ],
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case types.REMOVE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(({ id }) => id !== action.payload.id),
      };
    case types.FIND_NOTE:
      return {
        ...state,
        filteredNotes: state.notes.filter(({ title }) =>
          title.toLowerCase().includes(action.payload.title.toLowerCase())
        ),
      };
    case types.FIND_NOTE_INDEX:
      return {
        ...state,
        currentNoteIndex: state.notes.findIndex(
          ({ id }) => id === action.payload.id
        ),
      };
    case types.CLEAR_CURRENT_NOTE_INDEX:
      return {
        ...state,
        currentNoteIndex: null,
      };
    case types.EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map((note, i) =>
          i === state.currentNoteIndex ? action.payload : note
        ),
      };
    default:
      return state;
  }
};
