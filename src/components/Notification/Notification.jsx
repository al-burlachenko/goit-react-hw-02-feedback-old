import React, { Component } from "react";
import PropTypes from "prop-types";

import { Message } from "./Notification.styled";

class Notification extends Component {
  render() {
    const { message } = this.props;
    return <Message>{message}</Message>;
  }
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
