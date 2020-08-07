import React, { useEffect } from 'react';

import styles from './Popup.module.css';

import { judge } from '../../helpers/utils';

function Popup({ data: { selectedWord, correctLetters, wrongLetters, setPlayable, playAgain } }) {
  let finalMsg = '';
  let finalMsgReveal = '';
  let playable = true;

  let status = judge(correctLetters, wrongLetters, selectedWord);

  if (status === 'win') {
    finalMsg = 'Congratulations! You won! 😃';
    playable = false;
  } else if (status === 'lose') {
    finalMsg = 'Unfortunately you lost. 😕';
    finalMsgReveal = `...the word was: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
    console.log(`We are playable ? ${playable}`);
  }, [playable, setPlayable]);

  return (
    <div className={styles['popup-container']} style={finalMsg !== '' ? { display: 'flex' } : {}}>
      <div className={styles['popup']}>
        <h2>{finalMsg}</h2>
        <h3>{finalMsgReveal}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
}

export default Popup;
