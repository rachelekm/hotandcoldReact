import React from 'react';

import Clue from './clueoutput';
import Form from './importform';

export default function Input(props) {
  const { attempts, guessCount } = props;

  onSubmit(event) {
        event.preventDefault();
        const value = this.input.value;
        this.props.addGuess(value);
        this.input.value = '';
    }

  return (
    <section aria-label="Guess Input" aria-describedby="clue">
      <Clue clue={clue} guessCount={guessCount} />
      <Form />
    </section>
  );
}
