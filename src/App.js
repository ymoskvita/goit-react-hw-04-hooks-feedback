import { useState } from "react";
import FeedbackOptions from "./Feedback/FeedbackOptions";
import Statistic from "./Feedback/Statistics";
import Section from "./Feedback/Section";
import Notification from "./Feedback/Notification";

const options = ['good', 'neutral', 'bad'];

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setValue = event => {
    switch (event) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  }
  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round(good / countTotalFeedback * 100);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={setValue}
        />
      </Section>
      <Section title="Statistic">
        {countTotalFeedback
           ? < Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
          : <Notification message="There is no feedback" />
        }
      </Section>
    </>
  );
}