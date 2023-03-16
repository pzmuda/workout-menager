import React, { useState } from 'react';
import styled from './Accordion.module.scss'
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  console.log("clg ",items);

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedWorkout = (item) => {
   return item.map((item) => {
      return (
        <div>
          <div>{item.name}</div>
          <p>SETS: {item.currentSets}</p>
          <p>REPS: {item.reps * item.currentSets}</p>
        </div>
      )
    })
  }
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span>
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className={styled.accordion}
          onClick={() => handleClick(index)}
        >
          {item.title} {item.data}
          {icon}
        </div>
        {isExpanded && <div className={styled.accordion_content}>
          {renderedWorkout(item.exercise)}
        </div>}
      </div>
    );
  });

  return(
  <div className={styled.accordion_wrapper}>
    {renderedItems}
    </div>)
}

export default Accordion;