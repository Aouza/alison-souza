import React from "react";

import { Container } from "styles/components/ContactForm/ContactForm";
import Button from "./Button";
import Input from "./Input";

const ContactForm = () => {
  return (
    <Container>
      <Input type="name" id="nome" name="nome" placeholder="Seu nome" />
      <Input type="email" id="email" name="email" placeholder="Seu e-mail" />
      <Input type="text" id="phone" name="phone" placeholder="Seu telefone" />
      <Input
        type="text"
        id="site"
        name="site"
        placeholder="Seu site se possuir"
      />
      <Input type="text" id="subject" name="subject" placeholder="Assunto" />
      <textarea id="message" name="message" rows="10" />
      <Button value="Enviar" />
    </Container>
  );
}

export default ContactForm;
