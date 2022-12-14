import { Component } from 'react';
import Feedback from './Feedback/Feedback';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onClickButton = ({
    target: {
      dataset: { type },
    },
  }) => {
    this.setState({ [type]: this.state[type] + 1 });
  };
  render() {
    const { good, neutral, bad } = this.state;
    const { onClickButton } = this;
    return (
      <div
        style={{
          width: 'min-content',
          margin: '0 auto',
        }}
      >
        <div>
          <Feedback>
            options={Object.keys(this.state)}
            onLeaveFeedback={onClickButton}
          </Feedback>
        </div>
      </div>
    );
  }
}
export { App };
