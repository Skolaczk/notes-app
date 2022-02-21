import { useState, useEffect } from 'react';

const useMode = (initialState = false) => {
  const [modeState, setModeState] = useState(initialState);

  useEffect(() => {
    const getMode = JSON.parse(localStorage.getItem('mode'));

    if (getMode) {
      setModeState(getMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('mode', JSON.stringify(modeState));
  }, [modeState]);

  const handleChangeModeState = () => setModeState((prevState) => !prevState);

  return {
    modeState,
    handleChangeModeState,
  };
};

export default useMode;
