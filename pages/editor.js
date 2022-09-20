import React from 'react';
import Head from 'next/head';
import ControlBar from '../components/Editor/ControlBar';
import Canvas from '../components/Editor/Canvas';
import ComponentList from '../components/Editor/ComponentList';
import PropertyList from '../components/Editor/PropertyList';

function Editor() {
  return (
    <>
      <Head>
        <title>Low Code Editor</title>
      </Head>
      <div>
        <ControlBar />
        <div>
          <ComponentList />
          <Canvas />
          <PropertyList />
        </div>
      </div>
    </>
  );
}

export default Editor;
