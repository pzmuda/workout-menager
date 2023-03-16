import styled from './WorkoutList.module.scss'
import { useContext, useEffect, useState } from 'react';
import WorkoutListItem from '../WorkoutListItem/WorkoutListItem';
import { WorkoutContext } from 'providers/WorkoutProvider';

const WorkoutList = () => {
  const { workouts, onSelect, workoutItem } = useContext(WorkoutContext);
  const [selectWorkout, setSelectWorkout] = useState(true)


  const onSelectClick = (title) => {
    onSelect(title)
    setSelectWorkout(!selectWorkout)
  }

  const renderWorkoutList = workouts.map(({ title }) => (
    <div
      key={title}
      className={styled.workout_list_item}
      onClick={() => onSelectClick(title)}
    >
      {title}
    </div>
  ))


  const handleSelectWorkoutClick= () => setSelectWorkout(!selectWorkout)

  return (
    <div className={styled.workout_list}>
      {selectWorkout ?
        renderWorkoutList :
        <WorkoutListItem onClick={handleSelectWorkoutClick} />}
    </div>
  );
}

export default WorkoutList;