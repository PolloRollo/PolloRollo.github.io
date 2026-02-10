import '../styles/components/Button.css';
import { Link } from 'react-router-dom';
import React from 'react';

/* 


*/

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

interface ButtonProps {
  children: React.ReactNode,
  type: 'button' | 'submit' | 'reset',
  to: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  buttonStyle: string,
  buttonSize: string,
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  type, 
  to, 
  onClick = () => {
    // Default no-op handler
  }, 
  buttonStyle, 
  buttonSize 
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <Link to={to} className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
