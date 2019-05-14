import React from 'react';
import propTypes from 'prop-types';
import styles from './ColorDisplay.css';

function ColorDisplay({ color }) {
  return (
    <div ClassName={styles.ColorDisplay} style={{ backgroundColor: color }}></div>
  );
}

ColorDisplay.propTypes = {
  color: propTypes.string.isRequired
};

export default ColorDisplay;
