import React from 'react';
import styled from './BottomBar.module.scss'

const BottomBar = ({children}) => {
  return (<div className={styled.bottom_bar}>{children}</div>  );
}

export default BottomBar;