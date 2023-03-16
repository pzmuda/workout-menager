import React, { useState } from 'react';
import { workoutData, workoutHistory } from 'data/data'

export const WorkoutContext = React.createContext({
  workouts: [],
  a: [],
  currentExercise: 0,
  workoutItem: {},
  handleAddReps: () => { },
  handleAddSets: () => { },
  hendleNextExercise: () => { },
  hendleBackExercise: () => { },
  setWorkout: () => { },
  onSelect: () => { },
  handleAddWorkout: () => {},
})

const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkout] = useState(workoutData);
  const [a, setA] = useState(workoutHistory);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [workoutItem, setWorkoutItem] = useState({});

  const onSelect = (title) => {
    const workout = workouts.find(workout => workout.title === title);
    setWorkoutItem(workout)
    setCurrentExercise(0)
  }

  const handleAddWorkout = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;

    const workout = { ...workoutItem, data: currentDate }
    setA([...a, workout])
  }

  const handleAddReps = (id) => {
    const change = workoutItem?.exercise.map(item => {
      if (item.id === id) {
        return { ...item, currentReps: item.currentReps + 1 }
      } else {
        return { ...item }
      }
    })
    setWorkoutItem({ ...workoutItem, exercise: change })
  }

  const handleAddSets = (id) => {
    const change = workoutItem.exercise.map(item => {
      if (item.id === id) {
        return { ...item, currentReps: 0, currentSets: item.currentSets + 1 }
      } else {
        return { ...item }
      }
    })
    setWorkoutItem({ ...workoutItem, exercise: change })
  }

  const hendleNextExercise = () => {
    setCurrentExercise(currentExercise + 1);
    updateState();
  }

  const hendleBackExercise = () => {
    setCurrentExercise(currentExercise - 1);
    updateState();
  }

  const updateState = () => {
    const change = workouts.exercise.map(item => {
      if (item.id === currentExercise) {
        return { ...item, view: true }
      } else {
        return { ...item, view: false }
      }
    })
    setWorkout({ exercise: change });
  }


  return (
    <WorkoutContext.Provider value={
      {
        workouts,
        currentExercise,
        handleAddReps,
        handleAddSets,
        hendleNextExercise,
        hendleBackExercise,
        setWorkout,
        workoutItem,
        onSelect,
        a,
        handleAddWorkout
      }
    }>
      {children}
    </WorkoutContext.Provider>
  );
}

export default WorkoutProvider;


// <ExerciseList
//   exercise={workout.exercise}
//   hendleNextExercise={hendleNextExercise}
//   hendleBackExercise={hendleBackExercise}
//   currentExercise={currentExercise}
//   handleAddReps={handleAddReps}
//   handleAddSets={handleAddSets}
// />


// const handleAddReps = (id, title) => {
//   const workout = workouts?.find(item => item.title === title);

//   const change = workout?.exercise.map(item => {
//     if (item.id === id) {
//       return { ...item, currentReps: item.currentReps + 1 }
//     } else {
//       return { ...item }
//     }
//   })
//   const bum = workouts.map(item => {
//     if (item.title === title) {
//       return { ...item, exercise: change }
//     } else {
//       return { ...item }
//     }
//   })
//   setWorkout(bum)
// }