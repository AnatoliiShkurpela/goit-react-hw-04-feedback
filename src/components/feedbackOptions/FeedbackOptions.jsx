import React, { Component } from 'react';
import { Buttons, Button } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {
    return (
      <Buttons>
        {this.props.options.map(option => (
          <li key={option}>
            <Button
              type="button"
              name={option}
              onClick={this.props.onLeaveFeedback}
            >
              {option}
            </Button>
          </li>
        ))}
      </Buttons>
    );
  }
}
