import React from 'react';
import Header from './header';
import Input from './input';
import Output from './output';


export default class GuessGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attempts: [],
      clue: 'Make your guess!',
      answer: Math.round(Math.random() * 100) + 1
    };
  }

  restartGame() {
    this.setState({
      attempts: [],
      clue: 'Make your guess!',
      answer: Math.floor(Math.random() * 100) + 1
    });
  }

  newGuess(guess) {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({ clue: 'Please enter a valid number' });
      return;
    }

    const difference = Math.abs(guess - this.state.answer);

    let clue;
    if (difference >= 50) {
      clue = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      clue = 'You\'re Cold...';
    } else if (difference >= 10) {
      clue = 'You\'re Warm.';
    } else if (difference >= 1) {
      clue = 'You\'re Hot!';
    } else {
      clue = 'You got it!';
    }

    this.setState({
      clue,
      attempts: [...this.state.attempts, guess]
    });
  }

  render() {
    const { clue, attempts } = this.state;
    const guessCount = attempts.length;

    return (
      <div>
        <Header onRestartGame={() => this.restartGame()} />
        <main role="main">
          <Input
            clue={clue}
            guessCount={guessCount}
            submitGuess={num => this.newGuess(num)} />
          <Output attempts={this.state.attempts} />
        </main>
      </div>
    );
  }
}