import { useContext } from 'react';
import styled from './Exercise.module.scss'
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import Button from 'components/atoms/Button/Button';
import { WorkoutContext } from 'providers/WorkoutProvider';

const Exercise = ({ exercise }) => {
  const { hendleNextExercise, hendleBackExercise, handleAddReps,
    handleAddSets, currentExercise, workoutItem } = useContext(WorkoutContext);
  const maxlenght = workoutItem.exercise.length - 1;
  return (
    <div className={styled.exercise}>
      <div className={styled.exercise_title_wrapper}>
        {currentExercise !== 0 ? <SlArrowLeft onClick={hendleBackExercise} /> : <div className={styled.box}></div>}
        {exercise.name}
        {currentExercise !== maxlenght ? <SlArrowRight onClick={hendleNextExercise} /> : <div className={styled.box}></div>}
      </div>
      <div className={styled.exercise_container}>
        <div className={styled.exercise_container_item} >
          REPS: {exercise.currentReps}/{exercise.reps}
        </div>
        <div className={styled.exercise_container_item}>
          SETS: {exercise.currentSets}/{exercise.sets}
        </div>
        <div className={styled.exercise_container_item}>
          <Button onClick={() => handleAddSets(exercise.id)}>ADD SETS</Button>
          <Button onClick={() => handleAddReps(exercise.id)}>ADD REPS</Button>
        </div>
      </div>

    </div>);
}

export default Exercise;