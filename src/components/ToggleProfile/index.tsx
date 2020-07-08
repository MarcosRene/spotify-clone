import React from 'react';

import { Container, ListItem, Item } from './styles';

export interface Props {
  visible?: boolean;
}

const ToggleProfile: React.FC<Props> = ({
  visible,
}) => {
  return (
    <Container>
      <ListItem visible={visible}>
        <Item>Conta</Item>
        <Item>Perfil</Item>
        <Item className='separator'>Sair</Item>
      </ListItem>
    </Container>
  );
}

export default ToggleProfile;