import React from 'react';
import allComponents from '../../utils/allComponents';
import styles from '../../styles/ItemComponent.module.css';

function ItemComponent({ data }) {
  const Item = allComponents[data.tag];
  if (typeof data.props.children == 'object') {
    return (
      <Item {...data.props}>
        <ItemComponent data={data.props.children} />
      </Item>
    );
  }
  return (
    <div className={styles.wrapper}>
      <Item {...data.props} />
    </div>
  );
}

export default ItemComponent;
