import { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import style from './App.module.css';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onClickButton = ({
    target: {
      dataset: { type },
    },
  }) => {
    this.setState({ [type]: this.state[type] + 1 });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total !== 0 ? Math.round((100 / total) * good) : 0;
  };

  render() {
    const {
      onClickButton,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    const { good, neutral, bad } = this.state;

    const total = countTotalFeedback();
    return (
      <div
        style={{
          width: '500px',
          margin: '0 auto',
        }}
      >
        <div className={style.conteuner}>
          <Section title="Please leave feetback">
            <Feedback
              options={Object.keys(this.state)}
              onLeaveFeedback={onClickButton}
            ></Feedback>
          </Section>

          <Section title="Statistics">
            {total === 0 ? (
              <Notification sms="There is no feedback" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={countPositiveFeedbackPercentage()}
              ></Statistics>
            )}
          </Section>
        </div>
      </div>
    );
  }
}
export { App };
