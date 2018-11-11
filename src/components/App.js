import './App.css';

import React, { Component } from 'react';

import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Filters from './Filters';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Counter />
        <UserForm />
        <Filters />
        <ArticleList />
      </div>
    );
  }
}

export default App;
