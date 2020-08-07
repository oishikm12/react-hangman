import React from 'react';

import styles from './Word.module.css';

function Word({ selectedWord, correctLetters }) {
  return (
    <div className={styles.word}>
      {selectedWord.split('').map((letter, index) => {
        return (
          <span key={index} className={styles.letter}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        );
      })}
    </div>
  );
}

export default Word;
