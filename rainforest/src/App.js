import React, {Component} from 'react';
import './App.css';
import ItemGroup from './ItemGroup'

class App extends Component {
  render() {
  return (
    <div className="App">
      <h1>This is the rainforest app.</h1>
      <ItemGroup />
    </div>
  );
}
}

export default App;
