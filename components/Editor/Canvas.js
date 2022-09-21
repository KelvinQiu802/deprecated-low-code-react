import React from 'react';
import styles from '../../styles/Canvas.module.css';
import ItemComponent from './ItemComponent';

function Canvas({ data, currentSelect, setCurrentSelect }) {
  return (
    <div className={styles.canvas}>
      <div className={styles.container}>
        {data.map((item) => (
          <ItemComponent
            key={item.id}
            data={item}
            currentSelect={currentSelect}
            setCurrentSelect={setCurrentSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default Canvas;
