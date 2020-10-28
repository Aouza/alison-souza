import React from "react";

import { Container } from "styles/components/Techs/Tech";

function Tech({ logo, alt, type }) {
  return (
    <Container type={type}>
      <img src={logo} alt={alt} />
    </Container>
  );
}

export default Tech;
