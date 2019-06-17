import React from 'react';
import styled from 'styled-components';

const unit = 8;

const Heading = styled.Text`
  margin: ${unit * 6}px 0 ${unit * 2}px;
  padding: ${unit * 2}px;
  color: #1e152a;
  font-size: ${unit * 2}px;
  font-weight: bold;
`;

export default Heading;