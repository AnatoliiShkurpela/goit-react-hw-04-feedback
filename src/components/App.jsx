import React, { useState } from 'react';

import { Wrapper } from './App.styled';

import { Statistics } from 'components/statistics/Statistics';
import { FeedbackOptions } from 'components/feedbackOptions/FeedbackOptions';
import { Section } from 'components/section/Section';
import { Notification } from 'components/notification/Notification';

export function App() {
  const [good, setGoodFtb] = useState(0);
  const [neutral, setNeutralFtb] = useState(0);
  const [bad, setBadFtb] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  const handleIncrement = event => {
    event.preventDefault();
    const { name } = event.target;
    switch (name) {
      case 'good':
        setGoodFtb(prevGoodFtb => prevGoodFtb + 1);
        break;
      case 'neutral':
        setNeutralFtb(prevNeutralFtb => prevNeutralFtb + 1);
        break;
      case 'bad':
        setBadFtb(prevBadFtb => prevBadFtb + 1);
        break;
      default:
        return;
    }
  };

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
