import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: #aac9f0;
`;

const Section = styled.div`
  background-color: #f0d1aa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #f0aeaa;
  border-radius: 1em;
`;

const Button = styled.button`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 0.2em;
  margin: 0.2em;
  border-radius: 1em;
`;

const Content = () => {
  return (
    <Section>
      <Title>Section</Title>
      <Button>Click me</Button>
      <Button>Click me</Button>
    </Section>
  );
};

export default Content;
