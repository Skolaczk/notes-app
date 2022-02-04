import styled from 'styled-components';

export const StyledSocialButtons = styled.div`
  text-align: center;
  margin-top: 10px;

  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    color: white;
    margin: 0 7px;
    cursor: pointer;
    font-size: 18px;
  }

  button:nth-child(1) {
    background: #3a5998;
    position: relative;
    top: -8px;

    i {
      position: relative;
      top: 2px;
    }
  }

  button:nth-child(2) {
    background: #1b1f23;
    font-size: 40px;
  }

  button:nth-child(3) {
    background: #ea4335;
    position: relative;
    top: -8px;

    i {
      position: relative;
      top: 2px;
    }
  }
`;
