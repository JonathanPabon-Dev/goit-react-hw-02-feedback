import React, { Component } from 'react';
import css from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  handleGoodBtn() {
    this.setState(state => ({
      good: state.good + 1,
      total: state.good + state.neutral + state.bad + 1,
      positiveFeedback: `${Math.round(
        ((state.good + 1) / (state.good + state.neutral + state.bad + 1)) * 100
      )}`,
    }));
  }

  handleNeutralBtn() {
    this.setState(state => ({
      neutral: state.neutral + 1,
      total: state.good + state.neutral + state.bad + 1,
      positiveFeedback: `${Math.round(
        (state.good / (state.good + state.neutral + state.bad + 1)) * 100
      )}`,
    }));
  }

  handleBadBtn() {
    this.setState(state => ({
      bad: state.bad + 1,
      total: state.good + state.neutral + state.bad + 1,
      positiveFeedback: `${Math.round(
        (state.good / (state.good + state.neutral + state.bad + 1)) * 100
      )}`,
    }));
  }

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return `${Math.round((this.state.good / this.countTotalFeedback()) * 100)}`;
  }

  render() {
    return (
      <div className="container m-5">
        <h2>Please leave feedback</h2>
        <ul className={css.btnList}>
          <li>
            <button
              type="button"
              className="btn btn-success"
              onClick={this.handleGoodBtn.bind(this)}
            >
              <i className="bi bi-hand-thumbs-up"></i>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-warning"
              onClick={this.handleNeutralBtn.bind(this)}
            >
              <i className="bi bi-emoji-neutral"></i>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.handleBadBtn.bind(this)}
            >
              <i className="bi bi-hand-thumbs-down"></i>
            </button>
          </li>
        </ul>
        <h2>Statistics</h2>
        <p className={css.value}>Good: {this.state.good}</p>
        <p className={css.value}>Neutral: {this.state.neutral}</p>
        <p className={css.value}>Bad: {this.state.bad}</p>
        <p className={css.value}>Total: {this.state.total}</p>
        <p className={css.value}>
          Positive Feedback: {this.state.positiveFeedback}%
        </p>
      </div>
    );
  }
}

export default Feedback;
