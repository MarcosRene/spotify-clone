import styled from 'styled-components';

export const Container = styled.div`
  grid-area: PI;

  width: 100%;
  position: relative;
  
  background-color: #121212;
  
  overflow-y: scroll;

  ::-webkit-scrollbar {
    min-height: 30px;
    width: 13px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #5a5a5a;
    padding: 2px;
  }

  ::-webkit-scrollbar-track {
    background-color: #121212;
  }
`;


export const Content = styled.div`
  display: grid;
  grid-gap: 32px;
  padding-top: 76px;
  padding-bottom: 32px;
`;

