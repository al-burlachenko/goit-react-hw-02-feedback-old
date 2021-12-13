import React, { Component } from 'react';
import { SectionWrapper, Title } from './Section.styled';

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
