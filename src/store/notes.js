import { types } from 'constant/Constant';
import { initialState } from './initialState';

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
      if (action.payload.title === '') {
        return { ...state, filteredNotes: [] };
      } else {
        return {
          ...state,
          filteredNotes: state.notes.filter(({ title }) =>
            title.toLowerCase().includes(action.payload.title.toLowerCase())
          ),
        };
      }
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
