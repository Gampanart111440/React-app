import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
const word = "Hello";
class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World
 <p>{2 + 3}</p>
        <CharacterCard value="h" />
        <CharacterCard value="i" />
        {
          Array.from(word).map((c, i) => <CharacterCard value={c} key={i} />)
        }
      </div>
    );
  }
}
export default App;
