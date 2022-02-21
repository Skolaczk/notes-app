import React from 'react';
import { StyledButton } from 'components/atoms/Button/button';
import { StyledWarningModal } from './WarningModal.styles';

const WarningModal = ({ isOpen, handleCloseWarning }) => (
  <StyledWarningModal
    appElement={document.getElementById('root')}
    isOpen={isOpen}
    contentLabel="Warning Modal"
    style={{
      overlay: {
        background: 'transparent',
        width: '300px',
        height: '120px',
        margin: 'auto 0 0 auto',
      },
    }}
  >
    <p>Ups! something went wrong! check your note.</p>
    <StyledButton onClick={handleCloseWarning}>Close</StyledButton>
  </StyledWarningModal>
);

export default WarningModal;
