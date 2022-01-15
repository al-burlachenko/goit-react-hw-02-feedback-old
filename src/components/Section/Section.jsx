import React, { Component } from "react";
import PropTypes from "prop-types";

import { SectionWrapper, Title } from "./Section.styled";

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <SectionWrapper>
        <Title>{title}</Title>
        {children}
      </SectionWrapper>
    );
  }
}

export default Section;

Section.propTypes = { title: PropTypes.string, children: PropTypes.node };
