import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  constructor(props) {
    super(props);
    this.options = this.props.options;
    this.onLeaveFeedback = this.props.onLeaveFeedback;
  }

  render() {
    return (
      <div>
        <ul className={css.btnList}>
          {this.options.map(option => (
            <li key={option}>
              <button
                type="button"
                className={
                  option === 'good'
                    ? 'btn btn-success'
                    : option === 'neutral'
                    ? 'btn btn-warning'
                    : option === 'bad'
                    ? 'btn btn-danger'
                    : 'btn btn-secondary'
                }
                onClick={() => this.onLeaveFeedback(option)}
              >
                {option === 'good' ? (
                  <i className="bi bi-hand-thumbs-up"></i>
                ) : option === 'neutral' ? (
                  <i className="bi bi-emoji-neutral"></i>
                ) : option === 'bad' ? (
                  <i className="bi bi-hand-thumbs-down"></i>
                ) : (
                  option
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Notification.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
