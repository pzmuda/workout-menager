import Exercise from '../Exercise/Exercise';
import styled from './WorkoutListItem.module.scss';
import { SlArrowLeft } from "react-icons/sl";
import { useContext } from 'react';
import { WorkoutContext } from 'providers/WorkoutProvider';
import React from 'react';
import Timer from '../Timer/Timer';
import BottomBar from 'components/organisms/BottomBar/BottomBar';
import Button from 'components/atoms/Button/Button';


const WorkoutListItem = ({ onClick }) => {
  const { currentExercise, workoutItem, handleAddWorkout } = useContext(WorkoutContext);

  const renderExercise = workoutItem.exercise.map(item => {
    return (
      <React.Fragment key={item.id}>
        {item.id === currentExercise ? <Exercise exercise={item} title={workoutItem.title} /> : null}
      </React.Fragment>
    )
  })

  return (
    <div className={styled.workout_list_item}>
      <div className={styled.workout_list_item_title_section}>
        <div className={styled.workout_list_item_btn} onClick={onClick}>
          <SlArrowLeft />
        </div>
        <div className={styled.workout_list_item_title}>
          {workoutItem.title}
        </div>
      </div>
      {renderExercise}
      <div className={styled.workout_list_item_container}>
        <Timer />
        <BottomBar><Button onClick={handleAddWorkout}>SAVE SESION</Button> </BottomBar>
      </div>
    </div>);
}

export default WorkoutListItem;