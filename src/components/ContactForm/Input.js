import React from "react";

import { Container } from "styles/components/ContactForm/Input";

const Input = ({ type, id, name, placeholder }) => {
  return (
    <Container type={type} id={id} name={name} placeholder={placeholder} />
  );
}

export default Input;
