import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react'

import RecipeContainer from './RecipeContainer'

class App extends Component {
  render() {
    return (
      <div padded="true" className="App">
        <Header ui valigned middle className="Header" padded="true" as='h2'>Recipes App</Header>
        <RecipeContainer />
      </div>
    );
  }
}
export default App;
