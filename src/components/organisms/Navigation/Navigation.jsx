import { NavLink } from 'react-router-dom';
import styled from './Navigation.module.scss'

const Navigation = ({ onSelect }) => {
;
  return (
    <nav className={styled.nav}>
      <div className={styled.nav_wrapper}>
        <NavLink to="/">
          <div className={styled.nav_btn} onClick={onSelect}>SELECT WORKOUT</div>
          {/* <Button onClick={onSelect}>SELECT WORKOUT </Button> */}
        </NavLink>
        <NavLink to="/add-workout">
          <div className={styled.nav_btn} onClick={onSelect}>ADD WORKOUT</div>
        </NavLink>
        <NavLink to="/history-workout">
          <div className={styled.nav_btn} onClick={onSelect}>HISTORY WORKOUTS</div>
        </NavLink>
      </div>
    </nav>);
}

export default Navigation;