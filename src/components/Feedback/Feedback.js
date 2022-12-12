import React from 'react';

class Feedback extends React.Component {
  state = {
    value: 0,
  };
  countGoodFeedback = event => {
    this.setState(goodState => {
      return {
        value: goodState.value + 1,
      };
    });
  };
  countNeutralFeedback = event => {
    this.setState(neutralState => {
      return {
        value: neutralState.value + 1,
      };
    });
  };
  countBadFeedback = event => {
    this.setState(badState => {
      return {
        value: badState.value + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    console.log('click');
  };

  render() {
    return (
      <div>
        <div>
          <h1>Please leave feedback</h1>
          <div>
            <button type="button" onClick={this.countGoodFeedback}>
              Good
            </button>
            <button type="button" onClick={this.countNeutralFeedback}>
              Neutral
            </button>
            <button type="button" onClick={this.countBadFeedback}>
              Bad
            </button>
          </div>
        </div>
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>good={this.state.value}</li>
            <li>neutral={this.state.value}</li>
            <li>bad={this.state.value}</li>
            <li>total={this.state.value}</li>
            <li>positivePercentage={}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Feedback;
// export const Feedback = () => {
//   return (
//     <div>
//       <div>
//         <h1>Please leave feedback</h1>
//         <div>
//           <button>Good</button>
//           <button>Neutral</button>
//           <button>Bad</button>
//         </div>
//       </div>
//       <div>
//         <h2>Statistics</h2>
//         <ul>
//           <li>good={}</li>
//           <li>neutral={}</li>
//           <li>bad={}</li>
//           <li>total={}</li>
//           <li>positivePercentage={}</li>
//         </ul>
//       </div>
//     </div>
//   );
// };
