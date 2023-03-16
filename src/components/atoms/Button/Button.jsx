import styled from './Button.module.scss';

const Button = ({ children, onClick }) => {
  return (<button className={styled.button} onClick={onClick}>{children}</button> );
}

export default Button;