import React from 'react';

import Profile from '../Profile';

import { 
  Container,
  ButtonsGroup,
  ContentButton,
  ButtonChevronLeft, 
  ButtonChevronRight, 
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <ButtonsGroup>
        <ContentButton>
          <ButtonChevronLeft />
        </ContentButton>
        <ContentButton>
          <ButtonChevronRight />
        </ContentButton>
      </ButtonsGroup>
      <Profile name="dasmoura" />
    </Container>
  );
}

export default Header;