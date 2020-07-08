import React from 'react';

import ListAlgum from '../ListAlbum';
import Card from '../Card';

import { Container, Content } from './styles';

const PanelInfo: React.FC = () => {
  return (
    <Container>
      <Content>
        <ListAlgum title="Tocado recentemente" isButton="ver tudo">
          <Card artName="Sidoka" category="Artista" isPlay />
          <Card artName="Sidoka" category="Artista" isPlay />
          <Card artName="Sidoka" category="Artista" isPlay />
          <Card artName="Sidoka" category="Artista" isPlay />
          <Card artName="Sidoka" category="Artista" isPlay />
          <Card artName="Sidoka" category="Artista" isPlay />
        </ListAlgum>

        <ListAlgum title="Não sai dos seus ouvidos">
          <Card artName="Sidoka" category="Artista" isPlay />
          <Card artName="Sidoka" category="Artista" isPlay />
          <Card artName="Sidoka" category="Artista" isPlay />
        </ListAlgum>

        <ListAlgum title="Seus artistas favoritos" isButton="ver tudo">
          <Card artName="Sidoka" category="Artista" isPlay />
          <Card artName="Sidoka" category="Artista" isPlay />
          <Card artName="Sidoka" category="Artista" isPlay />
          <Card artName="Sidoka" category="Artista" isPlay />
        </ListAlgum>

        <ListAlgum title="Jump back in" subtitle="O que você tem mais curtido nesses últimos meses." isButton="ver tudo">
          <Card artName="Sidoka" category="Artista" isPlay />
          <Card artName="Sidoka" category="Artista" isPlay />
          <Card artName="Sidoka" category="Artista" isPlay />
          <Card artName="Sidoka" category="Artista" isPlay />
        </ListAlgum>

        <ListAlgum title="Suas músicas e álbuns favoritos" isButton="ver tudo">
          <Card artName="Sidoka" category="Artista" isPlay />
          <Card artName="Sidoka" category="Artista" isPlay />
          <Card artName="Sidoka" category="Artista" isPlay />
          <Card artName="Sidoka" category="Artista" isPlay />
          <Card artName="Sidoka" category="Artista" isPlay />
          <Card artName="Sidoka" category="Artista" isPlay />
        </ListAlgum>

        <ListAlgum title="Podcasts para você" isButton="ver tudo">
          <Card artName="DioCast - The Open Way Of Thinking" category="Diolinux" isPlay />
          <Card artName="DioCast - The Open Way Of Thinking" category="Diolinux" isPlay />
          <Card artName="DioCast - The Open Way Of Thinking" category="Diolinux" isPlay />
        </ListAlgum>

        <ListAlgum title="Artistas sugeridos" subtitle="Inspirado na sua atividade recente." isButton="ver tudo">
          <Card artName="Sidoka" category="Artista" isPlay />
          <Card artName="Sidoka" category="Artista" isPlay />
          <Card artName="Sidoka" category="Artista" isPlay />
          <Card artName="Sidoka" category="Artista" isPlay />
          <Card artName="Sidoka" category="Artista" isPlay />
          <Card artName="Sidoka" category="Artista" isPlay />
        </ListAlgum>

        <ListAlgum title="Recomendado para hoje" subtitle="Insipirado na sua atividade recente." isButton="ver tudo">
          <Card artName="Sidoka" category="Artista" isPlay />
          <Card artName="Sidoka" category="Artista" isPlay />
          <Card artName="Sidoka" category="Artista" isPlay />
          <Card artName="Sidoka" category="Artista" isPlay />
          <Card artName="Sidoka" category="Artista" isPlay />
          <Card artName="Sidoka" category="Artista" isPlay />
        </ListAlgum>
      </Content>
    </Container>
  );
}

export default PanelInfo;