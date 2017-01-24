import React, { Component } from 'react';
import RecipeListContainer from './containers/listContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        < RecipeListContainer/>
      </div>
    );
  }
}

export default App;
