import React from 'react';
import NotesListItem from 'components/molecules/NoteslistItem/NoteslistItem';
import { useSelector } from 'react-redux';
import { StyledNotesList, StyledParagraph } from './NotesList.styles';

const NotesList = () => {
  const notes = useSelector((state) => state.notes);
  const filteredNotes = useSelector((state) => state.filteredNotes);

  return (
    <StyledNotesList>
      {notes.length === 0 && <StyledParagraph>no notes</StyledParagraph>}
      {filteredNotes.length === 0
        ? notes.map((notesData) => (
            <NotesListItem notesData={notesData} key={notesData.id} />
          ))
        : filteredNotes.map((notesData) => (
            <NotesListItem notesData={notesData} key={notesData.id} />
          ))}
    </StyledNotesList>
  );
};

export default NotesList;
