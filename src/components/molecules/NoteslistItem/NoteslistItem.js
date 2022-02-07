import React from 'react';
import { StyledDescription, StyledNotesListItem } from './NotesListItem.styles';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeNote } from 'store/notes';

const NotesListItem = ({ notesData: { id, title, content } }) => {
  const dispatch = useDispatch();

  const handleRemoveNote = () => {
    dispatch(removeNote({ id }));
  };

  return (
    <StyledNotesListItem>
      <Link to="/note">
        <div>
          <p>{title}</p>
          <StyledDescription>{content}</StyledDescription>
        </div>
      </Link>
      <button onClick={handleRemoveNote}>
        <i className="fas fa-trash"></i>
      </button>
    </StyledNotesListItem>
  );
};

export default NotesListItem;
