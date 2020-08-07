import React from 'react';

import cx from 'classnames';

import styles from './Notification.module.css';

function Notification({ showNotification }) {
  return (
    <div className={cx(showNotification ? styles['show'] : '', styles['notification-container'])}>
      <p>You have already entered this letter</p>
    </div>
  );
}

export default Notification;
