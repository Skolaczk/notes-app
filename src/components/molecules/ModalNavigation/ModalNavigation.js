import React from 'react';
import { StyledIconButton } from 'components/atoms/IconButton/IconButton';
import { StyledModalNavigation } from './ModalNavgation.styles';

const ModalNavigation = ({ handleChangeModalState }) => {
  return (
    <StyledModalNavigation>
      <p>Settings</p>
      <StyledIconButton onClick={handleChangeModalState}>
        <i className="fas fa-plus"></i>
      </StyledIconButton>
    </StyledModalNavigation>
  );
};

export default ModalNavigation;
