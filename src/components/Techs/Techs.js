import React from "react";
import HTML5Image from "assets/images/techs-icons/html5-icon.png";
import CSS3Image from "assets/images/techs-icons/css3-icon.png";
import JavascriptImage from "assets/images/techs-icons/javascript-icon.png";
import ReactJSImage from "assets/images/techs-icons/reactjs-icon.png";
import GitImage from "assets/images/techs-icons/git-icon.png";
import NextJSImage from "assets/images/techs-icons/nextjs-icon.png";
import WordpressImage from "assets/images/techs-icons/wordpress-icon.png";

import Tech from "components/Techs/Tech";
import { Container } from "styles/components/Techs/Techs";

function Techs() {
  return (
    <Container>
      <Tech logo={HTML5Image} alt="HTML 5" type="html5" />
      <Tech logo={CSS3Image} alt="CSS 3" type="css3" />
      <Tech logo={JavascriptImage} alt="Javascript" type="javascript" />
      <Tech logo={ReactJSImage} alt="ReactJS" type="reactjs" />
      <Tech logo={GitImage} alt="Git" type="git" />
      <Tech logo={NextJSImage} alt="NextJS" type="nextjs" />
      <Tech logo={WordpressImage} alt="Wordpress" type="wordpress" />
    </Container>
  );
}

export default Techs;
