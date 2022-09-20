import React from 'react';
import allComponents from '../../utils/allComponents';
import styles from '../../styles/ItemComponent.module.css';

function ItemComponent({ data }) {
  const [hover, setHover] = React.useState(false);

  const Item = allComponents[data.tag];
  const cl = `${styles.wrapper} ${hover ? styles.hover : null}`;

  const handleMouseEnter = (e) => {
    e.stopPropagation();
    setHover(true);
  };
  const handleMouseLeave = (e) => {
    e.stopPropagation();
    setHover(false);
  };

  if (typeof data.props.children == 'object') {
    return (
      <div
        className={cl}
        onMouseEnter={(e) => handleMouseEnter(e)}
        onMouseLeave={(e) => handleMouseLeave(e)}
      >
        <Item {...data.props}>
          <ItemComponent data={data.props.children} />
        </Item>
      </div>
    );
  }

  return (
    <div
      className={cl}
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
    >
      <Item {...data.props} />
    </div>
  );
}

export default ItemComponent;
