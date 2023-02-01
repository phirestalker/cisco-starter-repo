import React, { Component } from 'react';
import './App.css';
import Heading from './components/Heading';
import Exhibit from './components/Exhibit';
import Address from './components/Address';

class App extends Component {
  render() {
  return (
    <div className="App">
      <Heading text="Sextant Network Information App"/>
      <div className="Exhibits">
      <Exhibit name="IPV4 Address" children={<Address ipType={4}/>}/>
      <Exhibit name="IPV6 Address" children={<Address ipType={6}/>}/>
      </div>
    </div>
  );
  }
}

export default App;
