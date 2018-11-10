import './App.css';

import React, { Component } from 'react';

import { articles } from '../fixtures';
import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Select from 'react-select';

class App extends Component {
  state = {
    selectedOption: null,
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  render() {
    const { selectedOption } = this.state;
    const selectedArticles = articles.filter(
      article =>
        !selectedOption ||
        selectedOption.some(option => option.value === article.id)
    );
    const options = articles.map(article => ({
      value: article.id,
      label: article.title,
    }));
    return (
      <div className="App">
        <UserForm />
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          isMulti={true}
        />
        <ArticleList articles={selectedArticles} />
      </div>
    );
  }
}

export default App;
