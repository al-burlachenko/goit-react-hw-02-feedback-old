import React, { Component } from 'react';
import { Buttons, ButtonItem } from './FeedbackOption.styled';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <Buttons>
        {options.map(option => (
          <ButtonItem
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}
          >
            {option.toUpperCase().split('').slice(0, 1) +
              option.split('').slice(1).join('')}
            {/* решил вспомнить методы обработки массивов вместо text-transform:capitalize  в css */}
          </ButtonItem>
        ))}
      </Buttons>
    );
  }
}

export default FeedbackOptions;
