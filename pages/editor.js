import React from 'react';
import Head from 'next/head';
import ControlBar from '../components/Editor/ControlBar';
import Canvas from '../components/Editor/Canvas';
import ComponentList from '../components/Editor/ComponentList';
import PropertyList from '../components/Editor/PropertyList';
import styles from '../styles/Editor.module.css';
import { nanoid } from 'nanoid';

function Editor() {
  const [data, setData] = React.useState([
    {
      tag: 'Box',
      id: nanoid(),
      props: {
        style: { width: '100%', height: '100%' },
        children: [
          {
            tag: 'Button',
            id: nanoid(),
            props: {
              text: 'Hello World',
              color: 'warning',
              variant: 'contained',
              size: 'large',
              children: [],
            },
          },
        ],
      },
    },
  ]);
  const [currentSelect, setCurrentSelect] = React.useState(null);

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
          />
          <PropertyList />
        </div>
      </div>
    </>
  );
}

export default Editor;
