import React from 'react';

export default function Header() {
  const styles = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  return (
    <header style={styles}>
      <img src='../assets/logo.gif' style={{ height: '100%' }} />
    </header>
  );
}
