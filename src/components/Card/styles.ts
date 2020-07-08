import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background-color: #282828;
  border-radius: 8px;

  padding: 20px 20px 16px;

  > span {
    margin-left: auto;
    position: absolute;
    bottom: 15px;
    right: 15px;

    &.active {
      position: absolute;
      height: 40px;
      width: 40px;
      opacity: 0;
      visibility: hidden;

      &:hover {
        transform: scale(1.1);
      }

      background-color: #1db954;

      border-radius: 50%;

      box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);
  
      &::after {
        content: '';
        position: absolute;
        right: 15px;
        bottom: 15px;
        width: 0;
        height: 0;
        border-left: 8px solid #ffffff;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
      } 
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;

export const Image = styled.div`  
  width: 100%;

  padding-bottom: 100%;
  margin-bottom: 16px;

  border-radius: 50%;
  background-color: #333;

  box-shadow: 0 10px 30px 0 rgba(0,0,0,.3), 0 1px 2px 0 rgba(0,0,0,.2);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: space-between;
`;

export const Info = styled.div`
  display: block;
  width: 100%;

  > h1 {  
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: #ffffff;
  }

  > span {
    margin-top: 4px;
    color: #b3b3b3;

    font-size: 11px;
    font-weight: 400;
    line-height: 16px;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid #b3b3b3;
    }
  }

  cursor: pointer;
`;