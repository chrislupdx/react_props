import React, { Purecomponent } from 'react';


export default class App extends Purecomponent {
  state ={
    color: ''
  }

  selectColor = color => {
    this.setState({ color });
  }

  render() {

    return (
      <>
      </>
    );
  }
}
