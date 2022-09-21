import React from 'react';
import allComponents from '../../utils/allComponents';
import styles from '../../styles/ItemComponent.module.css';

function ItemComponent({ data, currentSelect, setCurrentSelect }) {
  const isSelect = data.id == currentSelect;

  const Item = allComponents[data.tag];
  const cl = `${styles.wrapper} ${isSelect ? styles.hover : null}`;

  const handleClick = (e) => {
    e.stopPropagation();
    setCurrentSelect(data.id);
  };

  // nested component
  if (data.props.children.length) {
    return (
      <>
        {data.props.children.map((child) => {
          return (
            <Item
              {...data.props}
              className={cl}
              onClick={(e) => handleClick(e)}
              key={child.id}
            >
              <ItemComponent
                data={child}
                currentSelect={currentSelect}
                setCurrentSelect={setCurrentSelect}
              />
            </Item>
          );
        })}
      </>
    );
  }

  return (
    <Item {...data.props} className={cl} onClick={(e) => handleClick(e)} />
  );
}

export default ItemComponent;
