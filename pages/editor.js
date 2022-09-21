import React from 'react';
import Head from 'next/head';
import ControlBar from '../components/Editor/ControlBar';
import Canvas from '../components/Editor/Canvas';
import ComponentList from '../components/Editor/ComponentList';
import PropertyList from '../components/Editor/PropertyList';
import styles from '../styles/Editor.module.css';
import exampleJson from '../utils/exampleJson';

function Editor() {
  const [data, setData] = React.useState(exampleJson);
  const [currentSelect, setCurrentSelect] = React.useState(null);
  const [showBorder, setShowBorder] = React.useState([]);

  return (
    <>
      <Head>
        <title>Low Code Editor</title>
      </Head>
      <div className={styles.editor}>
        <ControlBar />
        <div className={styles.bottom}>
          <ComponentList />
          <Canvas
            data={data}
            currentSelect={currentSelect}
            setCurrentSelect={setCurrentSelect}
            showBorder={showBorder}
            setShowBorder={setShowBorder}
          />
          <PropertyList currentSelect={currentSelect} />
        </div>
      </div>
    </>
  );
}

export default Editor;
