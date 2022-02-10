import React from 'react';
import { StyledDescription, StyledNotesListItem } from './NotesListItem.styles';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeNote, findNoteIndex } from 'store/notes';
import { StyledIconButton } from 'components/atoms/IconButton/IconButton';

const NotesListItem = ({ notesData: { id, title, content } }) => {
  const dispatch = useDispatch();

  const handleRemoveNote = () => {
    dispatch(removeNote({ id }));
  };

  const handleFindNoteById = () => {
    dispatch(findNoteIndex({ id }));
  };

  return (
    <StyledNotesListItem>
      <Link to="/note" onClick={handleFindNoteById}>
        <div>
          <p>{title.length > 40 ? `${title.slice(0, 40)}...` : title}</p>
          <StyledDescription>
            {content.length > 45 ? `${content.slice(0, 45)}...` : content}
          </StyledDescription>
        </div>
      </Link>
      <StyledIconButton onClick={handleRemoveNote}>
        <i className="fas fa-trash"></i>
      </StyledIconButton>
    </StyledNotesListItem>
  );
};

export default NotesListItem;
