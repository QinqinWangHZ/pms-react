/*eslint-disable */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from '../components/test';


const Test = () => {

  return (
    <div>
      <Counter>
        <div>
          test
        </div>
      </Counter>
    </div>
  );
};

Test.PropTypes = {};


export default Test;


