import React from "react";
import ItemPortfolioImage from "assets/images/item-portfolio.jpg";
import ItemPortfolioImageGithub from "assets/images/item-portfolio-master-github.jpg";
import ItemPortfolioImageCompanyme from "assets/images/item-portfolio-companyme.jpg";
import ItemPortfolioImageWith from "assets/images/item-portfolio-withmakeup.jpg";
import { Container } from "styles/components/PortfolioContent/PortfolioContent";
import Portfolio from "./Portfolio";

const PortfolioContent = () => {
  return (
    <Container>
      <Portfolio image={ItemPortfolioImage}>
        <div>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            corrupti doloremque iusto consequatur mollitia nesciunt cum minus
            eos minima, quo vel natus illo illum adipisci saepe placeat hic vero
            sed?
          </p>

          <a href="https://alumia.netlify.app">Visite alumia.netlify.app</a>
        </div>
      </Portfolio>

      <Portfolio image={ItemPortfolioImageGithub}>
        <div>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            corrupti doloremque iusto consequatur mollitia nesciunt cum minus
            eos minima, quo vel natus illo illum adipisci saepe placeat hic vero
            sed?
          </p>

          <a href="https://alumia.netlify.app">Visite alumia.netlify.app</a>
        </div>
      </Portfolio>

      <Portfolio image={ItemPortfolioImageCompanyme}>
        <div>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            corrupti doloremque iusto consequatur mollitia nesciunt cum minus
            eos minima, quo vel natus illo illum adipisci saepe placeat hic vero
            sed?
          </p>

          <a href="https://alumia.netlify.app">Visite alumia.netlify.app</a>
        </div>
      </Portfolio>

      <Portfolio image={ItemPortfolioImageWith}>
        <div>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            corrupti doloremque iusto consequatur mollitia nesciunt cum minus
            eos minima, quo vel natus illo illum adipisci saepe placeat hic vero
            sed?
          </p>

          <a href="https://alumia.netlify.app">Visite alumia.netlify.app</a>
        </div>
      </Portfolio>
    </Container>
  );
};

export default PortfolioContent;
