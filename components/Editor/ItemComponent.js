import React from 'react';
import allComponents from '../../utils/allComponents';
import styles from '../../styles/ItemComponent.module.css';

function ItemComponent(props) {
  console.log(props);
  const Item = allComponents[props.tag];
  const data = props;
  if (typeof data.props?.children == 'object') {
    return (
      <Item {...data.props}>
        <ItemComponent {...data.props.children} />
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
