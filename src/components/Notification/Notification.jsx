import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Notification.module.css';

class Notification extends Component {
  render() {
    return (
      <>
        <p className={css.message}>{this.props.message}</p>
      </>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
