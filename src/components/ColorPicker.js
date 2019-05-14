import React from 'react';
import propTypes from 'prop-types';
import styles from './ColorPicker.css';

function ColorPicker({ selectColorHandler }) {
  return (
    <section className={styles.colorPicker}>
      <button className={styles.red} onClick={() => selectColorHandler('red')}>Red</button>
      <button className={styles.yellow} onClick={() => selectColorHandler('yellow')}>Yellow</button>
      <button className={styles.blue} onClick={selectColorHandler.bind(null, 'blue')}>Blue</button>
    </section>
  );
}

ColorPicker.propTypes = {
  selectColorHandler: propTypes.func.isRequired
};

export default ColorPicker;
