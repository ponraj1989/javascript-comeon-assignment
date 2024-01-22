import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import LogoImg from '../assets/images/logo.svg';

const Logo = () => {
  return (
    <Container>
      <div>
        <Image src={LogoImg} alt="logo" size="medium" centered />
      </div>
    </Container>
  );
};

export default Logo;