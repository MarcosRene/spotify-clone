import React from 'react';
import { FiHome } from 'react-icons/fi';
import { FiSearch } from 'react-icons/fi';
import { FiList } from 'react-icons/fi';

import Item from '../Item';

import Link from '../Link';

import { 
  Container, 
  Content, 
  Playlists, 
  Group, 
  AddPlaylist, 
  LikesPlaylist,
  Separator,
  ListItem,
  InstallApp,
  AppDonwload,
} from './styles';

import Logo from '../../assets/Logo.png';

const Sidebar: React.FC= () => {
  return (
    <Container>
       <img src={Logo} alt="logo"/>

      <Content> 
        <Link href="#" title="Início" icon={FiHome} isLink={true} />
        <Link href="#" title="Buscar" icon={FiSearch} />
        <Link href="#" title="Sua biblioteca" icon={FiList} />

        <Playlists>
          <h1>Playlists</h1>

          <Group>
            <AddPlaylist />
            
            <span>Criar playlist</span>
          </Group>
          <Group>
            <LikesPlaylist />
            <span>Músicas Curtidas</span>
          </Group>

          <Separator />
          
        </Playlists>

        <ListItem>
          <div>
            <Item>Hungria - As melhores 2020123123</Item>
            <Item>Hungria - As melhores 2020</Item>
            <Item>Hungria - As melhores 2020</Item>
            <Item>Hungria - As melhores 2020</Item>
            <Item>Hungria - As melhores 2020</Item>
            <Item>Hungria - As melhores 2020</Item>
            <Item>Hungria - As melhores 2020</Item>
            <Item>Hungria - As melhores 2020</Item>
            <Item>Hungria - As melhores 2020</Item>
            <Item>Hungria - As melhores 2020</Item>
          </div>
        </ListItem>

        <InstallApp>
          <button>
            <AppDonwload />
            <span>Instalar aplicativo</span>
          </button>
        </InstallApp>

      </Content>
    </Container>
  );
}

export default Sidebar;