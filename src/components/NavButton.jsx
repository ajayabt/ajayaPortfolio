import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NavButton = ({path, buttonText }) => {
  let navigate = useNavigate();
  
  const goToProjects = () => {
    navigate(path);
  };

  return (
    <Button variant="outline-light" size="large" onClick={goToProjects}>{buttonText}</Button>
  );
};

export default NavButton;
