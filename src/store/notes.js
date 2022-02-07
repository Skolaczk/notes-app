import { types } from 'constant/Constant';

export const removeNote = (payload) => {
  return {
    type: types.REMOVE_NOTE,
    payload,
  };
};

export const findNote = (payload) => {
  return {
    type: types.FIND_NOTE,
    payload,
  };
};

const initialState = {
  filteredNotes: [],
  notes: [
    {
      id: 1,
      title: 'Lorem ipsum',
      content: 'Lorem ipsum dolor sit amet',
    },
  ],
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
