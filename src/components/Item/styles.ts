import styled from 'styled-components';

export const Container = styled.a`
  text-decoration: none;

  > span {
    display: block;
    line-height: 32px;
    
    font-size: 14px;
    font-weight: 400;

    text-overflow: ellipsis;
    white-space: nowrap; 
    overflow: hidden;

    color: #b3b3b3;

    &:hover {
      color: #ffffff;
      transition: color .2s;
    }
  }
`;
