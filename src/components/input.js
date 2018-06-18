import React from 'react';

import Clue from './clue';
import Form from './inputform';

export default function Input(props) {
  const { clue, guessCount } = props;

  return (
    <section aria-label="Guess Input" aria-describedby="clue">
      <Clue clue={clue} guessCount={guessCount} />
      <Form submitGuess={guess => props.submitGuess(guess)}/>
    </section>
  );
}
