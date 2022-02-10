import React from 'react';
import { StyledIconButton } from 'components/atoms/IconButton/IconButton';
import { StyledFormNavigation } from './FormNavigation.styles';
import { Link } from 'react-router-dom';

const FormNavigation = () => {
  return (
    <StyledFormNavigation>
      <Link to="/">
        <StyledIconButton>
          <i className="fas fa-arrow-left"></i>
        </StyledIconButton>
      </Link>
      <StyledIconButton form="form">
        <i className="fas fa-check"></i>
      </StyledIconButton>
    </StyledFormNavigation>
  );
};

export default FormNavigation;
