import React, { Component } from 'react';

import { Wrapper } from './App.styled';

import { Statistics } from 'components/statistics/Statistics';
import { FeedbackOptions } from 'components/feedbackOptions/FeedbackOptions';
import { Section } from 'components/section/Section';
import { Notification } from 'components/notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    );
  };

  handleIncrement = event => {
    event.preventDefault();
    this.setState(prevState => {
      return { [event.target.name]: prevState[event.target.name] + 1 };
    });
  };

  render() {
    return (
      <Wrapper>
        <Section title="Please leave feed back">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        {this.countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Wrapper>
    );
  }
}
