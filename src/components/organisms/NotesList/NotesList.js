import React from 'react';
import NotesListItem from 'components/molecules/NoteslistItem/NoteslistItem';
import { useSelector } from 'react-redux';

const NotesList = () => {
  const notes = useSelector((state) => state.notes);
  const filteredNotes = useSelector((state) => state.filteredNotes);

  return (
    <div>
      {filteredNotes.length > 0
        ? filteredNotes.map((notesData) => (
            <NotesListItem notesData={notesData} key={notesData.id} />
          ))
        : notes.map((notesData) => (
            <NotesListItem notesData={notesData} key={notesData.id} />
          ))}
    </div>
  );
};

export default NotesList;
