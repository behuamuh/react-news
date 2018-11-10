import './App.css';

import React, { Component } from 'react';

import { articles } from '../fixtures';
import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Filters from './Filters';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserForm />
        <Filters />
        <ArticleList articles={articles} defaultOpenId={articles[0].id} />
      </div>
    );
  }
}

export default App;
