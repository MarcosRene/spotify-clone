import React, { useState } from 'react';

import ToggleProfile from '../ToggleProfile';

import { Container, Content, Avatar, AvatarIcon, Username, Toggle } from './styles';

interface Props {
  name: string;
}

const Profile: React.FC<Props> = ({
  name,
}) => {
  const [visible, setVisible] = useState(false);
  
  function handleToggleVisible(): void {
    setVisible(!visible);
  }

  return (
    <Container onClick={handleToggleVisible}>
      <Content>
        <Avatar>
          <AvatarIcon />
        </Avatar>
        <Username>{name}</Username>
        <Toggle />
      </Content>
      <ToggleProfile visible={visible} />
    </Container>
  );
}

export default Profile;