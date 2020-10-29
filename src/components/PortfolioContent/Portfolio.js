import React from "react";

import { Container } from "styles/components/PortfolioContent/Portfolio";

const Portfolio = ({ image, children }) => {
  return (
    <Container>
      {children}
      <img src={image} alt="Alumia" />
    </Container>
  );
};

export default Portfolio;
