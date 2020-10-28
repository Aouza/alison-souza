import React from "react";
import { menuItems } from "services/api";
import ItemMenu from "components/Menu/ItemMenu";

import { Container } from "styles/components/Menu/Menu";
const Menu = ({ isMobile }) => {
  return (
    <Container isMobile={isMobile}>
      {menuItems.map((item) => {
        return <ItemMenu key={item.title} title={item.title} />;
      })}
    </Container>
  );
};

export default Menu;
