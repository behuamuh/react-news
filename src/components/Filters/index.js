import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Select from 'react-select';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { connect } from 'react-redux';
import { setFilters } from '../../actions';

class Filters extends Component {
  
  static propTypes = {
    setFilters: PropTypes.func,
  };

  handleDayClick = day => {
    const range = DateUtils.addDayToRange(day, this.props);
    const { from = null, to = null } = range;
    this.props.setFilters({ filters: { from, to } });
  };

  handleResetClick = () => {
    this.props.setFilters({ filters: { from: null, to: null } });
  };

  handleChange = selectedOption => {
    this.props.setFilters({ filters: { selectedOption } });
  };

  render() {
    const { from, to, selectedOption } = this.props;
    const modifiers = { start: from, end: to };
    const options = this.props.articles.map(article => ({
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

export default connect(
  ({filters}) => ({...filters}),
  { setFilters }
)(Filters);
