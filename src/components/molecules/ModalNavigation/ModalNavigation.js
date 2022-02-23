import React from 'react';
import { StyledIconButton } from 'components/atoms/IconButton/IconButton';
import { StyledModalNavigation } from './ModalNavgation.styles';

const ModalNavigation = ({ handleChangeModalState }) => {
  return (
    <StyledModalNavigation>
      <p>Settings</p>
      <StyledIconButton onClick={handleChangeModalState}>
        <i className="fa-solid fa-xmark"></i>
      </StyledIconButton>
    </StyledModalNavigation>
  );
};

export default ModalNavigation;
