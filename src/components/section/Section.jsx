import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Title, SectionDiv } from 'components/section/Section.styled';

export class Section extends Component {
  render() {
    return (
      <SectionDiv>
        <Title>{this.props.title}</Title>
        {this.props.children}
      </SectionDiv>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
