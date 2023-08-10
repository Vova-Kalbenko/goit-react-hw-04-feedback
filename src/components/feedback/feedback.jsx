import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedBackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


   const handleStatsChange = option => {
    if(option === 'good'){
      setGood((prevGood) => prevGood + 1);
    }
    else if(option === 'neutral'){
      setNeutral((prevNeutral) => prevNeutral + 1);
    }
     else if(option === 'bad'){
      setBad((prevBad) => prevBad + 1);
    }
  };
   const countTotalFeedback = () => {
    return good + neutral + bad;
  };
   const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    return Math.round((good * 100) / total);
  };

  // render() {
    const total = countTotalFeedback();
    const positiveFeedback = countPositiveFeedbackPercentage();
  //   const { good, neutral, bad } = this.state;
  //   const options = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedBackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleStatsChange}
          />
        </Section>

        {total > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedback}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
export default Feedback




