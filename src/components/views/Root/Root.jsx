import Navigation from "components/organisms/Navigation/Navigation";
import TopBar from "components/organisms/TopBar/TopBar";
import WorkoutProvider from "providers/WorkoutProvider";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddWorkout from "../AddWorkout/AddWorkout";
import HistoryWorkout from "../HistoryWorkout/HistoryWorkout";
import SelectWorkout from "../SelectWorkout/SelectWorkout";
import styled from './Root.module.scss'

function Root() {
  const [showNav, setShowNav] = useState(false)

  const handleClick = () => {
    setShowNav(!showNav)
  }

  return (
    <BrowserRouter>
      <WorkoutProvider>
        <div className={styled.root}>
          <TopBar onClick={handleClick} />
          {showNav && <Navigation onSelect={handleClick} />}
          <Routes>
            <Route path="/" element={<SelectWorkout />} />
            <Route path="/add-workout" element={<AddWorkout />} />
            <Route path="/history-workout" element={<HistoryWorkout />} />
          </Routes>
        </div>
      </WorkoutProvider>
    </BrowserRouter>
  );
}

export default Root;
