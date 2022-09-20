import React from 'react';
import allComponents from '../../utils/allComponents';

function ItemComponent(props) {
  const Item = allComponents[props.tag];
  return (
    <>
      <Item {...props.props} />
    </>
  );
}

export default ItemComponent;
