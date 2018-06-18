import React from 'react';

import GuessList from './guess-list';
import GuessCount from './guessCount';

export default function StatusSection(props) {
  const { attempts } = props;
  const guessCount = attempts.length;

  return (
    <section aria-labelledby="guessCount" aria-describedby="guessList">
      <GuessCount guessCount={guessCount} />
      <GuessList attempts={attempts} />
    </section>
  );
}