import styled from 'styled-components';
import { FiUser } from 'react-icons/fi';
import { FaSortDown } from 'react-icons/fa';

export const Container = styled.div`
`;

export const Content = styled.button`
  display: flex;
  align-items: center;

  border: 0;

  border-radius: 23px;
  background-color: rgba(0,0,0,.7);
  min-width: 32px;

  padding: 2px;

  &:hover {
    background-color: #282828;
  }
`;

export const Avatar = styled.div`
  width: 28px;
  height: 28px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background-color: #333333;
`;

export const AvatarIcon = styled(FiUser)`
  width: 16px;
  height: 16px;

  color: #ffffff;
`;

export const Username = styled.div`
  font-size: 14px;
  font-weight: 700;

  margin: 0 6px;

  color: #ffffff;
`;

export const Toggle = styled(FaSortDown)`
  position: relative;
  top: -2px;

  width: 18px;
  height: 16px;

  color: #ffffff;

  margin-right: 8px;
`;
