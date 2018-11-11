import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {increment} from '../actions';

const Counter = ({
  counter,
  increment,
}) => {
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() =>increment(-1)}>Decrement</button>
      <button onClick={() => increment(1)}>Increment</button>
    </div>
  );
};

Counter.propTypes = {
  counter: PropTypes.number,
  increment: PropTypes.func.isRequired,
};

export default connect(state => ({ counter: state.count }), {increment})(Counter);
