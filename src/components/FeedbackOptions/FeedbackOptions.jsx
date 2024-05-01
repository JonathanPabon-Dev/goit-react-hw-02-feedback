import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    return (
      <>
        <ul className={css.btnList}>
          {this.props.options.map(option => (
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
                onClick={() => {
                  this.props.onLeaveFeedback(option);
                }}
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
      </>
    );
  }
}

Notification.propTypes = {
  options: PropTypes.object,
};

export default FeedbackOptions;
