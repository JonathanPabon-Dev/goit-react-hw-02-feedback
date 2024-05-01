import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './Section.module.css';

class Section extends Component {
  constructor(props) {
    super(props);
    this.title = this.props.title;
  }

  render() {
    return (
      <section>
        <h2 className={css.title}>{this.title}</h2>
        {this.props.children}
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
