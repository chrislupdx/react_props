import React from 'react';
import Header from './Header';
import Dog from './Dog';

export default function App() {
  return (
        <>
        <Header />
        <Dog name="ugh" age={200} />
        </>
  );
}
