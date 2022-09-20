import React from 'react';
import styles from '../../styles/Canvas.module.css';
import ItemComponent from './ItemComponent';
import { nanoid } from 'nanoid';

function Canvas({ data }) {
  return (
    <div className={styles.canvas}>
      {data.map((item) => (
        <ItemComponent key={nanoid()} {...item} />
      ))}
    </div>
  );
}

export default Canvas;
