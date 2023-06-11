import React from 'react';
import PropTypes from 'prop-types';
import { Title, SectionDiv } from 'components/section/Section.styled';

export function Section({ title, children }) {
  return (
    <SectionDiv>
      <Title>{title}</Title>
      {children}
    </SectionDiv>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
