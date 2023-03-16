import { SlMenu } from "react-icons/sl";
import styled from './TopBar.module.scss'

const TopBar = ({ showNav, onClick}) => {
  return (
    <div className={styled.top_bar_top_bar} >
      {!showNav &&
        <div className={styled.top_bar_nav_btn} >
          <SlMenu onClick={onClick}/>
        </div>}
    </div>
   );
}

export default TopBar;