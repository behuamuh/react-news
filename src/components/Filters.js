import React, { Component } from 'react';

import Select from 'react-select';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { articles } from '../fixtures';

export default class Filters extends Component {
  state = {
    selectedOption: null,
    from: undefined,
    to: undefined,
  };

  handleDayClick = day => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  };

  handleResetClick = () => {
    this.setState({ from: undefined, to: undefined });
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
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
      <div>
        <p>
          {!from && !to && 'Please select the first day.'}
          {from && !to && 'Please select the last day.'}
          {from &&
            to &&
            `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
          {from && to && (
            <button className="link" onClick={this.handleResetClick}>
              Reset
            </button>
          )}
        </p>
        <DayPicker
          className="Selectable"
          numberOfMonths={1}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          isMulti={true}
        />
      </div>
    );
  }
}
