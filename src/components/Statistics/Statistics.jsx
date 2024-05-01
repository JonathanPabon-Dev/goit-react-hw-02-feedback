import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

class Statistics extends Component {
  render() {
    return (
      <>
        <p className={css.value}>Good: {this.props.good}</p>
        <p className={css.value}>Neutral: {this.props.neutral}</p>
        <p className={css.value}>Bad: {this.props.bad}</p>
        <p className={css.value}>Total: {this.props.total}</p>
        <p className={css.value}>
          Positive Feedback: {this.props.positivePercentage}%
        </p>
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
