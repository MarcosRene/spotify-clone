import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';

export const Container = styled.div`
  grid-area: PM;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 16px;

  background-color: #282828;
  border-top: 1px solid #000000;
`;

export const PlaybarLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const PlaybarCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    display: flex;
    align-items: center;

    > span {
      color: #b3b3b3;
      margin: 8px;
      font-size: 11px;
      font-weight: 400;
      line-height: 16px;
    }
  }
`;

export const PlaybarRight = styled.div`
  width: 100%;
  width: 120px;

  display: flex;
  align-items: center;

  > img {
    margin-left: 8px;
  }
`;

export const IconPlay = styled.img`
  width: 32px;
  height: 32px;

  margin: 0 10px;
  color: #b3b3b3;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Icon = styled.img`
  width: 14px;
  height: 14px;

  margin: 0 15px;
  color: #b3b3b3;
`;

export const Iconward = styled.img`
  width: 10px;
  height: 10px;

  color: #b3b3b3;

  margin: 0 15px;

  &:hover {
    color: #ffffff;
  }
`;

export const LikesPlaylist = styled(FiHeart)`
  width: 16px;
  height: 16px;

  color: #b3b3b3;

  &:hover {
    color: #ffffff;
  }
`;

export const Play = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.span`
  width: 56px;
  height: 56px;

  background-color: #000000;
`;

export const Info = styled.div`
  margin: 0 14px;

  > h1 {
    position: relative;
    font-size: 14px;
    line-height: 20px;
    color: #fff;
    letter-spacing: 0.025em;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    cursor: pointer;
  
    &:hover {
      &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 2px;
        height: 1px;
        width: 100%;
        background-color: #ffffff;
      }
    }
  }

  > span {
    position: relative;
    color: #b3b3b3;
    font-size: 12px;

    cursor: pointer;
  }
`; 

export const Mention = styled.span`
  position: relative;

  & + span {
    margin-left: 2px;
  } 

  &:hover {
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 1px;
      width: 100%;
      background-color: #ffffff;
    }
  }
`;

export const ControlPanel = styled.div`
`;
