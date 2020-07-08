import React from 'react';

import { Container, Image, Content, Info } from './styles';

export interface Props {
  category: string;
  artName: string;
  isPlay?: boolean; 
}

const Card: React.FC<Props> = ({
  artName,
  category,
  isPlay,
}) => {
  return (
    <Container>
      <Image />

      <Content>
        <Info>
          <h1>{artName}</h1>
          <span>{category}</span>
        </Info> 
      </Content>
      <span className={isPlay ? 'active' : ''} />
    </Container>
  );
}

export default Card;