import React from 'react';

import styles from './WrongLetters.module.css';

function WrongLetters({ wrongLetters }) {
  return (
    <div className={styles['wrong-letters-container']}>
      <div>
        {wrongLetters.length > 0 ? <p>Wrong</p> : ''}
        {wrongLetters
          .map((letter, index) => <span key={index}>{letter}</span>)
          .reduce((prev, curr) => (prev === null ? [curr] : [prev, ', ', curr]), null)}
      </div>
    </div>
  );
}

export default WrongLetters;
