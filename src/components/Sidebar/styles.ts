import styled from 'styled-components';
import { FaPlus, FaHeart } from 'react-icons/fa';
import { FiArrowDownCircle } from 'react-icons/fi';

export const Container = styled.nav`
  grid-area: SD;
  
  display: flex;
  flex-direction: column;

  padding-top: 24px;

  background-color: #040404;

  max-height: calc(100vh - 60px);

  > img {
    width: 131px;
    height: 39px;
    
    margin-bottom: 18px;
    padding-left: 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  
  /* padding: 0 8px; */
`;

export const Playlists = styled.div`
  margin: 24px 0 6px 0;
  padding: 0 24px;

  > h1 {
    margin-bottom: 12px;

    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: .1em;
    text-transform: uppercase;

    color: #b3b3b3;
  }
`;


export const Group = styled.button`
  display: flex;
  align-items: center;

  background: none;

  padding: 5px 0;

  font-size: 14px;
  font-weight: 700;

  color: #ffffff;
  opacity: 0.7;

  transition: opacity .2s;

  &:hover {
    opacity: 1;
  }

  cursor: pointer;
`;

export const Separator = styled.div`
  border-bottom: 1px solid #282828;

  margin: 8px 0 0;
`;

export const AddPlaylist = styled(FaPlus)`
  width: 16px;
  height: 16px;

  color: #010101;
  background-color: #b3b3b3;

  margin-right: 16px;
  padding: 8px;
`;

export const LikesPlaylist = styled(FaHeart)`
  width: 16px;
  height: 16px;

  color: #b3b3b3;
  background: linear-gradient(135deg,#450af5,#c4efd9);

  margin-right: 16px;
  padding: 8px;
`;

export const ListItem = styled.div`
  position: relative;
  padding: 4px 0;

  > div {
    padding: 0 24px;

    max-height: 173px;

    display: flex;
    flex-direction: column;
  }

  overflow-y: scroll;  

  ::-webkit-scrollbar {
    min-height: 30px;
    width: 13px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #5a5a5a;
    padding: 2px;
  }
`;

export const InstallApp = styled.div`
  padding: 0 8px;
  background-color: #000;

  button {
    text-decoration: none;
    padding: 0 20px 0 16px;

    display: flex;
    align-items: center;

    height: 40px;

    background-color: transparent;
    color: #b3b3b3;
    transition: color .2s;

    &:hover {
      color: #ffffff;
    }

    > span {
      font-size: 14px;
      font-weight: 700;
    }
  }
`;

export const AppDonwload = styled(FiArrowDownCircle)`
  width: 20px;
  height: 20px;

  margin-right: 16px;
`;