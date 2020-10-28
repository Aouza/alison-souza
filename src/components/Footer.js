import React from "react";
import { BiCoffeeTogo } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

import { Container, Wrapper } from "styles/components/Footer";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <p>
          Desenvolvido por <span> Alison Souza </span> com <FaHeart /> e muito
          <BiCoffeeTogo />
        </p>
      </Wrapper>
    </Container>
  );
};

export default Footer;
