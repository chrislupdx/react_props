import React from 'react';
import Header from './Header';
import Color from './Color';

export default function App() {
  return (
        <>
        <Header />
        <Color name={name} rgb={rgb} />
        </>
  );
}
