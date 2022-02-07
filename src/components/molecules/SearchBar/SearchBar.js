import React from 'react';
import { StyledSearchBar } from './SearchBar.styles';
import { useDispatch } from 'react-redux';
import { findNote } from 'store/notes';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleFindNote = (e) => {
    dispatch(findNote({ title: e.target.value }));
  };

  return (
    <StyledSearchBar>
      <i className="fas fa-search"></i>
      <input
        type="text"
        placeholder="Search a notes"
        onChange={handleFindNote}
      />
    </StyledSearchBar>
  );
};

export default SearchBar;
