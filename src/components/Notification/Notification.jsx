import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Notification.module.css';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.message = this.props.message;
  }

  render() {
    return (
      <>
        <p className={css.message}>{this.message}</p>
      </>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
