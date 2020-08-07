import React from 'react';

import styles from './Header.module.css';

function Header() {
  return (
    <>
      <h1 className={styles.heading}>Hangman</h1>
      <p>Find the hidden word - Enter a letter</p>
    </>
  );
}

export default Header;
