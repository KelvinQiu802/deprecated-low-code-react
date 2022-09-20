import React from 'react';
import allComponents from '../../utils/allComponents';
import styles from '../../styles/ItemComponent.module.css';

function ItemComponent(props) {
  const Item = allComponents[props.tag];
  return (
    <div className={styles.wrapper}>
      <Item {...props.props} />
    </div>
  );
}

export default ItemComponent;
