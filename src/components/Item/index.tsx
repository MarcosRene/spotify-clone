import React from 'react';

import { Container } from './styles';

const Item: React.FC = ({
  children,
}) => {
  return (
  <Container href="#">
    <span>{children}</span>
  </Container>
  );
}

export default Item;