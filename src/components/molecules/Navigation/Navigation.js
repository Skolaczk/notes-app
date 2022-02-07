import React from 'react';
import { StyledNavigation } from './Navigation.styles';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <StyledNavigation>
      <button>
        <i className="fas fa-cog"></i>
      </button>
      <p>All notes</p>
      <Link to="/note">
        <button>
          <i className="fas fa-plus"></i>
        </button>
      </Link>
    </StyledNavigation>
  );
};

export default Navigation;
