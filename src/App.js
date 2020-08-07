import React, { useState, useEffect } from 'react';

import { Header, Figure, Popup, Notification } from './components/index';

import { delayToggle } from './helpers/utils';

/**
 * Finds out a random word
 * @return {String} Word
 */
function getWord() {
  const words = ['application', 'programming', 'interface', 'wizard'];
  return words[Math.floor(Math.random() * words.length)];
}

let selectedWord = getWord();

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetter] = useState([]);
  const [wrongLetters, setWrongLetter] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const { key, keyCode } = event;

      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          correctLetters.indexOf(letter) === -1
            ? setCorrectLetter((letters) => [...letters, letter])
            : delayToggle(setShowNotification);
        } else {
          wrongLetters.indexOf(letter) === -1
            ? setWrongLetter((letters) => [...letters, letter])
            : delayToggle(setShowNotification);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [correctLetters, playable, wrongLetters]);

  /**
   * Resets for a rematch
   * @param {Function} e Even for click
   */
  function playAgain(e) {
    e.preventDefault();
    setPlayable(true);
    setCorrectLetter([]);
    setWrongLetter([]);
    selectedWord = getWord();
  }

  return (
    <>
      <Header />
      <Figure data={{ selectedWord, correctLetters, wrongLetters }} />
      <Popup data={{ selectedWord, correctLetters, wrongLetters, setPlayable, playAgain }} />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;
