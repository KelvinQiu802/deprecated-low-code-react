import React from 'react';
import Head from 'next/head';
import ControlBar from '../components/Editor/ControlBar';
import Canvas from '../components/Editor/Canvas';
import ComponentList from '../components/Editor/ComponentList';
import PropertyList from '../components/Editor/PropertyList';
import styles from '../styles/Editor.module.css';

function Editor() {
  const [data, setData] = React.useState([
    {
      tag: 'Paper',
      props: {
        elevation: 2,
        square: false,
        style: { padding: '100px' },
        children: {
          tag: 'Button',
          props: {
            text: 'Hello World',
            color: 'warning',
            variant: 'contained',
            size: 'large',
          },
        },
      },
    },
    {
      tag: 'Button',
      props: {
        color: 'secondary',
        text: 'Lydia',
        variant: 'outlined',
      },
    },
  ]);

  return (
    <>
      <Head>
        <title>Low Code Editor</title>
      </Head>
      <div className={styles.editor}>
        <ControlBar />
        <div className={styles.bottom}>
          <ComponentList />
          <Canvas data={data} />
          <PropertyList />
        </div>
      </div>
    </>
  );
}

export default Editor;
