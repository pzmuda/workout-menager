import WorkoutList from "components/molecules/WorkoutList/WorkoutList";
import styled from './SelectWorkout.module.scss'

const SelectWorkout = () => {
  return (
    <div className={styled.select_workout}>
      <div className={styled.select_workoutselect_workout_wrapper}>
        <WorkoutList />
      </div>
    </div>);
}

export default SelectWorkout;