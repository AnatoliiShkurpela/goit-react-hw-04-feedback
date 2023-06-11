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
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleIncrement}
      />
    </Section>
    {countTotalFeedback() ? (
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    ) : (
      <Notification message="There is no feedback" />
    )}
  </Wrapper>
);
}