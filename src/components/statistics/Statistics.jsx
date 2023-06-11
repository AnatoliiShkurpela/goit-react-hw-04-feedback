import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Item } from './Statistics.styled';

export class Statistics extends Component {
  render() {
    return (
      <List>
        <Item>Good: {this.props.good}</Item>
        <Item>Neutral: {this.props.neutral}</Item>
        <Item>Bad: {this.props.bad}</Item>
        <Item>Total: {this.props.total()}</Item>
        <Item>Positive feedback: {this.props.positivePercentage()}%</Item>
      </List>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
