import styled from 'styled-components';

// HD - Header
// SD - Sidebar
// PI - Panel Info
// PM - Play Music

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 232px auto;
  grid-template-rows: auto 90px;

  grid-template-areas:
    'SD PI'
    'PM PM'
  ;

  height: 100vh;
`;
