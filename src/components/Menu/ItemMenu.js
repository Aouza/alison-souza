import React from "react";
import Link from "next/link";
import { Container } from "styles/components/Menu/ItemMenu";

const ItemMenu = ({ title }) => {
  return (
    <Container>
      <Link href="!#">{title}</Link>
    </Container>
  );
};

export default ItemMenu;
