import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import AllBoards from './containers/AllBoardsContainer';
import ActiveBoard from './containers/ActiveBoardContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <h1 className="App__title">Trello Clone</h1>
        </header>
        <main className="App__main">
          <Switch>
            <Route exact path="/" component={AllBoards} />
            <Route path="/board/:id" component={ActiveBoard} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
