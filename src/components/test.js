/*eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const Counter = ({dispatch, children, test}) => {
  console.log(test);
  console.log(children);
  const onIncrement = (test) => {
    dispatch({
      type: 'INCREMENT',
      payload: {},
    });
  }
  return(
    <div>
      <span>点击{test}次</span>
      <button onClick={onIncrement}>onIncrement</button>
      <div>{children}</div>
    </div>
  )
}

Counter.propTypes = {
  children: PropTypes.element.isRequired
}

function mapStateToProps(state) {
  console.log(state)
  const { test } = state.test;
  return {
    test: test
  }
}

export default connect(mapStateToProps)(Counter);