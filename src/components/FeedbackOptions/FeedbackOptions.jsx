import React, { Component } from "react";
import PropTypes from "prop-types";

import { Buttons, ButtonItem } from "./FeedbackOption.styled";

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <Buttons>
        {options.map((option) => (
          <ButtonItem
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}
          >
            {option.toUpperCase().split("").slice(0, 1) +
              option.split("").slice(1).join("")}
            {/* используются методы обработки массивов вместо text-transform:capitalize в css без особых причин*/}
          </ButtonItem>
        ))}
      </Buttons>
    );
  }
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
