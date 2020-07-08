import React, { useState } from 'react';

import { Container, Content } from './styles';

export interface Props {
  porc: number;
}

const ProgressBar: React.FC<Props> = ({
  porc
}) => {
  const [show, setShow] = useState({});
  
  setTimeout(() => {
     const style = {
        opacity: 1,
        width: `${porc}%`
     }
     
     setShow(style);
  }, 200);

  return (
    <Container>
      <Content porc={porc} style={show} />
        
    </Container>
  );
}

export default ProgressBar;