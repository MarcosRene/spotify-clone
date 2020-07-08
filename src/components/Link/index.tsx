import React, { AnchorHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isLink?: boolean;
  title: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Link: React.FC<Props> = ({
  title,
  icon: Icon,
  isLink,
  ...res
}) => {
  return (
    <Container 
      isLink={isLink}
      title={title}
      className={isLink ? 'active' : ''}
      {...res}
    >
      {Icon && <Icon size={24} />}
      <span>{title}</span>
    </Container>
  );
}

export default Link;