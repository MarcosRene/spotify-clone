import React from 'react';

import { Container, Header, Title, Subtitle, Button } from './styles';

interface Props {
  title: string;
  subtitle?: string;
  isButton?: string;
}

const ListAlbum: React.FC<Props> = ({
  title, 
  subtitle,
  isButton,
  children,
}) => {
  return (
    <Container>
      <Header>
        <div>
          <Title>{title}</Title>
          <Button>{isButton}</Button> 
        </div>
  
        <Subtitle>{subtitle}</Subtitle>
      </Header>

      {children}
  </Container>
  );
}

export default ListAlbum;