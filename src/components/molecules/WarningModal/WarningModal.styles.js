import styled from 'styled-components';
import ReactModal from 'react-modal';

export const StyledWarningModal = styled(ReactModal)`
  background-color: ${({ theme }) => theme.active};
  border-radius: 10px;
  width: 300px;
  height: 120px;
  color: ${({ theme }) => theme.text};
  position: absolute;
  padding: 15px;
  outline: none;
  font-size: 15px;
  right: 20px;
  bottom: 20px;

  button {
    margin-top: 20px;
    width: 120px;
    height: 30px;
    position: absolute;
    right: 15px;
    bottom: 15px;
  }

  @media (max-width: 425px) {
    width: 90vw;
  }
`;
