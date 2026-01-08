import '../styles/components/Button.css';
import { Link } from 'react-router-dom';

/* 


*/

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

interface ButtonProps {
  children: any,
  type: any,
  to: string,
  onClick: any,
  buttonStyle: string,
  buttonSize: string,
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  type, 
  to, 
  onClick=()=>{}, 
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
