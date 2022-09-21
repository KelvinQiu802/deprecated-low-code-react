import React from 'react';
import allComponents from '../../utils/allComponents';
import styles from '../../styles/ItemComponent.module.css';
import basicComponents from '../../utils/basicComponents';

function ItemComponent({
  data,
  currentSelect,
  setCurrentSelect,
  showBorder,
  setShowBorder,
}) {
  const isSelect = showBorder.find((itemId) => itemId == data.id);

  const Item = allComponents[data.tag];
  const cl = `${styles.wrapper} ${isSelect ? styles.hover : null}`;

  const handleClick = (e) => {
    if (data.tag == 'Stack') {
      e.stopPropagation();
    }
    if (e.target == e.currentTarget) {
      setCurrentSelect(data.id);
      setShowBorder([]);
    }
    setShowBorder((prev) => [...prev, data.id]);
  };

  // nested component
  if (data.props.children.length) {
    return (
      <Item {...data.props} className={cl} onClick={(e) => handleClick(e)}>
        {data.props.children.map((child) => (
          <ItemComponent
            data={child}
            currentSelect={currentSelect}
            setCurrentSelect={setCurrentSelect}
            showBorder={showBorder}
            setShowBorder={setShowBorder}
            key={child.id}
          />
        ))}
      </Item>
    );
  }

  return (
    <Item {...data.props} className={cl} onClick={(e) => handleClick(e)} />
  );
}

export default ItemComponent;
