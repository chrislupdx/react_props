import React from 'react';
// import logo from '../assets/logo.gif';

export default function Header() {
  const styles = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  return (
    <header style={styles}>
      <img src='./src/assets/logo.gif' style={{ height: '100%' }} />
    </header>
  );
}
