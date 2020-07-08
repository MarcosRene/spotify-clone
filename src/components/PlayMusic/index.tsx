import React from 'react';

import ProgressBar from '../ProgressBar';

import { 
  Container, 
  PlaybarLeft, 
  PlaybarCenter, 
  PlaybarRight, 
  LikesPlaylist, 
  Play, 
  Image,
  Info,
  Mention,
  ControlPanel,
  Icon,
  IconPlay,
  Iconward
 } from './styles';

import volume from '../../assets/volume.svg';
import play from '../../assets/play.svg';
import shuffle from '../../assets/shuffle.svg';
import backward from '../../assets/backward.svg';
import forward from '../../assets/forward.svg';
import repeat from '../../assets/repeat.svg';

interface Props {
  musicName: string;
  artName: string | React.ReactElement | React.ReactNode;
}

const Thumbnail: React.FC<Props> = ({
  musicName,
  artName,
}) => {
  return (
    <Play>
      <Image />

      <Info>
        <h1>{musicName}</h1> 
        <span>{artName}</span>
      </Info>
    </Play>
  )
}

const PlayMusic: React.FC = () => {
  return (
    <Container>
      <PlaybarLeft>
        <Thumbnail 
          musicName="Olha Pro Oclin" 
          artName={
            <>
              <Mention>Sidoka</Mention>, 
              <Mention>FBC</Mention>
            </>
          }
        />
        <LikesPlaylist />
      </PlaybarLeft>
      <PlaybarCenter>
        <ControlPanel>
          <Icon src={shuffle} alt=""/>
          <Iconward src={backward} alt="" />
          <IconPlay src={play} alt="Play" />
          <Iconward src={forward} alt="" />
          <Icon src={repeat} alt="" />
        </ControlPanel>
        <div>
          <span>2:88</span>
          <ProgressBar porc={80} />
          <span>3:41</span>
        </div>
      </PlaybarCenter>
      <PlaybarRight>
        <Icon src={volume} alt="Volume" />
        <ProgressBar porc={50} />
      </PlaybarRight>
    </Container>
  );
}

export default PlayMusic;