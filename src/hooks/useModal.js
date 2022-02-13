import { useState } from 'react';

const useModal = (initialState = false) => {
  const [isOpen, setModalState] = useState(initialState);

  const handleChangeModalState = () => setModalState((prevState) => !prevState);

  return {
    isOpen,
    handleChangeModalState,
  };
};

export default useModal;
