import { v4 as uuid } from 'uuid';

export const initialState = {
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
