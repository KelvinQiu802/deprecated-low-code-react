import React from 'react';
import styles from '../../styles/PropertyList.module.css';
import componentProperty from '../../utils/componentProperty';

function PropertyList({ currentSelect }) {
  let properties = [];
  for (const key in componentProperty[currentSelect?.tag]) {
    properties.push(key);
  }

  return (
    <div className={styles.list}>
      PropertyList
      <br />
      {currentSelect?.id}
      <br />
      {properties?.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}

export default PropertyList;
