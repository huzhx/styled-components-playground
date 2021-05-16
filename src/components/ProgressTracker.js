import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: #aac9f0;
`;

const Section = styled.div`
  background-color: #ffffff;
  border: solid 3px grey;
  margin: 4px;
  width: 350px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: left;
  font-size: 40px;
  color: #ff6961;
`;

const WeekdayTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 2.3em;
  border-right: solid 3px lightgrey;
  padding-left: 0.4em;
`;

const ProgressTracker = () => {
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const content = [];
  for (let weekDay of weekDays) {
    content.push(
      <Section key={weekDay}>
        <WeekdayTitle>{weekDay}</WeekdayTitle>
      </Section>
    );
  }

  return (
    <>
      <Title>Progress Tracker</Title>
      {content}
    </>
  );
};

export default ProgressTracker;
