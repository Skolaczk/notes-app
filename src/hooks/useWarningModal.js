import { useState } from 'react';

const useWarningModal = (initialState = false) => {
  const [isWarningOpen, setWarningState] = useState(initialState);

  const handleOpenWarning = () => setWarningState(true);
  const handleCloseWarning = () => setWarningState(false);

  if (isWarningOpen) setTimeout(handleCloseWarning, 5000);

  return {
    isWarningOpen,
    handleOpenWarning,
    handleCloseWarning,
  };
};

export default useWarningModal;
