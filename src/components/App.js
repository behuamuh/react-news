import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        <Filters articles={this.props.articles} />
        <ArticleList />
      </div>
    );
  }
}

export default connect(state => ({ articles: state.articles }))(App);
