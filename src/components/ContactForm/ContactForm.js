import React, { useEffect, useRef } from "react";
import { gsap, Power3, Elastic, TweenMax, Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Container } from "styles/components/ContactForm/ContactForm";
import Button from "./Button";
import Input from "./Input";

const ContactForm = () => {
  let formRef = useRef();

  useEffect(() => {
    gsap.from(formRef.children, {
      y: "100%",
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: formRef.children,
        start: "top 60%",
        end: "top 50%",
        scrub: 3,
        id: "form",
      },
    });
    6;
  }, []);
  return (
    <Container ref={(el) => (formRef = el)}>
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
};

export default ContactForm;
