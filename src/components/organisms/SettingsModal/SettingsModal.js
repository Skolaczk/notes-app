import React from 'react';
import ModalNavigation from 'components/molecules/ModalNavigation/ModalNavigation';
import { StyledSettingsModal } from './SettingsModal.styles';
import Settings from 'components/molecules/Settings/Settings';

const SettingsModal = ({ isOpen, handleChangeModalState }) => {
  return (
    <StyledSettingsModal
      appElement={document.getElementById('root')}
      isOpen={isOpen}
      contentLabel="Settings Modal"
      onRequestClose={handleChangeModalState}
    >
      <ModalNavigation handleChangeModalState={handleChangeModalState} />
      <Settings />
    </StyledSettingsModal>
  );
};

export default SettingsModal;
