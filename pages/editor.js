import React from 'react';
import Head from 'next/head';
import ControlBar from '../components/Editor/ControlBar';
import Canvas from '../components/Editor/Canvas';
import ComponentList from '../components/Editor/ComponentList';
import PropertyList from '../components/Editor/PropertyList';
import styles from '../styles/Editor.module.css';

function Editor() {
  return (
    <>
      <Head>
        <title>Low Code Editor</title>
      </Head>
      <div className={styles.editor}>
        <ControlBar />
        <div className={styles.bottom}>
          <ComponentList />
          <Canvas />
          <PropertyList />
        </div>
      </div>
    </>
  );
}

export default Editor;
