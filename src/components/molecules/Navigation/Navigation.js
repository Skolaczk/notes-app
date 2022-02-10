import React from 'react';
import { StyledNavigation } from './Navigation.styles';
import { Link } from 'react-router-dom';
import { StyledIconButton } from 'components/atoms/IconButton/IconButton';
import { useDispatch } from 'react-redux';
import { clearCurrentNoteIndex } from 'store/notes';

const Navigation = () => {
  const dispatch = useDispatch();

  const handleClearCurrentNoteIndex = () => {
    dispatch(clearCurrentNoteIndex());
  };

  return (
    <StyledNavigation>
      <StyledIconButton>
        <i className="fas fa-cog"></i>
      </StyledIconButton>
      <p>All notes</p>
      <Link to="/note">
        <StyledIconButton onClick={handleClearCurrentNoteIndex}>
          <i className="fas fa-plus"></i>
        </StyledIconButton>
      </Link>
    </StyledNavigation>
  );
};

export default Navigation;
