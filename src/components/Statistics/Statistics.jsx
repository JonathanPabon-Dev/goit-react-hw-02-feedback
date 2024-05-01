import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

class Statistics extends Component {
  constructor(props) {
    super(props);
    this.good = this.props.good;
    this.neutral = this.props.neutral;
    this.bad = this.props.bad;
    this.total = this.props.total();
    this.positivePercentage = this.props.positivePercentage();
  }

  render() {
    return (
      <div>
        <p className={css.value}>Good: {this.good}</p>
        <p className={css.value}>Neutral: {this.neutral}</p>
        <p className={css.value}>Bad: {this.bad}</p>
        <p className={css.value}>Total: {this.total}</p>
        <p className={css.value}>
          Positive Feedback: {this.positivePercentage}%
        </p>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positiveFeedback: PropTypes.func,
};

export default Statistics;
