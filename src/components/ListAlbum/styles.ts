import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-gap: 16px;
  padding: 0 35px;
  
  grid-template-columns: repeat(auto-fill,minmax(150px,1fr));
`;

export const Header = styled.div`
  grid-column: 1/-1;
  
  > div {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  color: #b3b3b3;
  background: none;
  border: none;

  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: .1em;
  text-transform: uppercase;

  border-bottom: 1px solid transparent;

  cursor: pointer;

  &:hover {
    border-bottom: 1px solid #b3b3b3;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  letter-spacing: -.04em;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  color: #fff;
  border-bottom: 2px solid transparent;

  cursor: pointer;

  &:hover {
    border-bottom: 2px solid #fff;
  }
`;


export const Subtitle = styled.span`
  font-size: 14px;
  color: #b3b3b3;
  
  font-size: 400;
`;