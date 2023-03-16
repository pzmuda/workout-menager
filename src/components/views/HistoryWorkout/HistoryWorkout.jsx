import Accordion from 'components/molecules/Accordion/Accordion';
import { WorkoutContext } from 'providers/WorkoutProvider';
import { useContext } from 'react';
import styled from './HistoryWorkout.module.scss';

const HistoryWorkout = () => {
  const { a } = useContext(WorkoutContext);
  console.log('a ',a);
  return (
    <div className={styled.history_workout}>
      {/* historia */}
      <Accordion items={a}/>
    </div>);
}

export default HistoryWorkout;