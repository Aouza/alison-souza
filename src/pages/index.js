import React, { useRef, useEffect } from "react";
import Head from "next/head";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { TimelineLite, Power3, TweenMax, Expo } from "gsap";
import ImageAvatar from "assets/images/head.png";
import AboutImage from "assets/images/portfolio-perfil.jpg";
import ItemPortfolio from "assets/images/item-portfolio.jpg";
import ContactImage from "assets/images/et-contact.svg";

import Techs from "components/Techs/Techs";
import Header from "components/Header";
import BoxOverlay from "components/BoxOverlay";

import {
  Container,
  HeroHeader,
  Wrapper,
  SocialGroup,
  AboutSection,
  AboutContent,
  ImageAbout,
  PortfolioSection,
  PortfolioContent,
  TechsSection,
  ContactSection,
  ImageContact,
  InfoContact,
  FormContact,
} from "styles/pages/Home";
import ContactForm from "components/ContactForm/ContactForm";
import Footer from "components/Footer";
import SecondaryTitle from "components/SecondaryTitle";

const Home = () => {
  let headerRef = useRef();
  let contentRef = useRef();
  let overlay1Ref = useRef();
  let overlay2Ref = useRef();
  let overlay3Ref = useRef();
  let socialRef = useRef();

  useEffect(() => {
    const logoImage = headerRef.firstElementChild.firstElementChild;
    const menuLinks = headerRef.firstElementChild.lastElementChild.children;
    const avatarImage = contentRef.firstElementChild;
    const nameAuthor = contentRef.children[1];
    const mainTitle = contentRef.children[2].children;
    const mainText = contentRef.children[3].children;
    const availableText = contentRef.children[4];
    const callButton = contentRef.children[5];
    const socialButtons = socialRef.children;

    TweenMax.from(logoImage, 1, {
      delay: 1.2,
      opacity: 0,
      x: -20,
      ease: Power3.easeInOut,
    });

    TweenMax.staggerFrom(
      menuLinks,
      1,
      {
        delay: 1.2,
        opacity: 0,
        x: -20,
        ease: Power3.easeInOut,
      },
      0.08
    );

    TweenMax.from(avatarImage, 2, {
      delay: 2.4,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    TweenMax.from(nameAuthor, 1, {
      delay: 2,
      opacity: 0,
      ease: Power3.easeInOut,
    });

    TweenMax.staggerFrom(
      mainTitle,
      1,
      {
        delay: 1.4,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut,
      },
      0.08
    );

    TweenMax.staggerFrom(
      mainText,
      1,
      {
        delay: 1.6,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut,
      },
      0.08
    );

    TweenMax.from(availableText, 1, {
      delay: 1.8,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    TweenMax.from(callButton, 1, {
      delay: 2,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    TweenMax.staggerFrom(
      socialButtons,
      1,
      {
        delay: 1.6,
        opacity: 0,
        x: -20,
        ease: Expo.easeInOut,
      },
      0.08
    );

    TweenMax.to(overlay1Ref, 1.5, {
      delay: 0.2,
      left: "-100%",
      ease: Expo.easeInOut,
    });

    TweenMax.to(overlay2Ref, 1.5, {
      delay: 0.4,
      left: "-100%",
      ease: Expo.easeInOut,
    });

    TweenMax.to(overlay3Ref, 1.5, {
      delay: 0.6,
      left: "-100%",
      ease: Expo.easeInOut,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Alison Souza - Front-end Developer.</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header ref={(el) => (headerRef = el)} />
      <Container>
        <Wrapper>
          <HeroHeader ref={(el) => (contentRef = el)}>
            <img src={ImageAvatar} alt="Avatar Alison" />
            <h1>Olá, eu sou o Alison.</h1>
            <h2>
              <div>
                <span>Desenvolvendo interfaces para a web e</span>
              </div>
              <div>
                <span>gerando ótimas experiências.</span>
              </div>
            </h2>
            <p>
              <div>
                <span>
                  Desenvolvedor front-end, apaixonado por criar interfaces
                  modernas e responsivas.
                </span>
              </div>

              <div>
                <span>
                  As stacks Javascript fazem meus olhos brilharem! obrigado
                  ReactjS.
                </span>
              </div>
            </p>
            <span>disponível para jobs</span>
            <button>Contate-me</button>
          </HeroHeader>

          <SocialGroup ref={(el) => (socialRef = el)}>
            <FaGithub />
            <FaLinkedinIn />
            <FaInstagram />
          </SocialGroup>
        </Wrapper>

        <BoxOverlay ref={(el) => (overlay1Ref = el)} style={{ top: 0 }} />
        <BoxOverlay ref={(el) => (overlay2Ref = el)} style={{ top: "33.3%" }} />
        <BoxOverlay ref={(el) => (overlay3Ref = el)} style={{ top: "66.6%" }} />

        <AboutSection>
          <Wrapper>
            <AboutContent>
              <SecondaryTitle>Lorem ipsum.</SecondaryTitle>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                nesciunt officia quae quidem? Recusandae labore, aliquam
                quibusdam eius, modi ducimus assumenda ratione.
              </p>
              <p>
                Aassumenda voluptates a necessitatibus officia optio doloremque
                aliquid maiores laborum aut quidem, voluptate error debitis rem
                quam?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                nesciunt officia quae quidem? Recusandae labore, aliquam
                quibusdam eius, modi ducimus assumenda ratione.
              </p>
            </AboutContent>

            <ImageAbout>
              <img src={AboutImage} alt="Alison Souza" />
            </ImageAbout>
          </Wrapper>
        </AboutSection>

        <PortfolioSection>
          <Wrapper>
            <SecondaryTitle>Alguns dos meus jobs</SecondaryTitle>

            <PortfolioContent>
              <div>
                <h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  corrupti doloremque iusto consequatur mollitia nesciunt cum
                  minus eos minima, quo vel natus illo illum adipisci saepe
                  placeat hic vero sed?
                </p>

                <a href="https://alumia.netlify.app">
                  Visite alumia.netlify.app
                </a>
              </div>

              <img src={ItemPortfolio} alt="Alumia" />
            </PortfolioContent>

            <PortfolioContent>
              <div>
                <h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  corrupti doloremque iusto consequatur mollitia nesciunt cum
                  minus eos minima, quo vel natus illo illum adipisci saepe
                  placeat hic vero sed?
                </p>

                <a href="https://alumia.netlify.app">
                  Visite alumia.netlify.app
                </a>
              </div>

              <img src={ItemPortfolio} alt="Alumia" />
            </PortfolioContent>

            <PortfolioContent>
              <div>
                <h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  corrupti doloremque iusto consequatur mollitia nesciunt cum
                  minus eos minima, quo vel natus illo illum adipisci saepe
                  placeat hic vero sed?
                </p>

                <a href="https://alumia.netlify.app">
                  Visite alumia.netlify.app
                </a>
              </div>

              <img src={ItemPortfolio} alt="Alumia" />
            </PortfolioContent>

            <PortfolioContent>
              <div>
                <h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  corrupti doloremque iusto consequatur mollitia nesciunt cum
                  minus eos minima, quo vel natus illo illum adipisci saepe
                  placeat hic vero sed?
                </p>

                <a href="https://alumia.netlify.app">
                  Visite alumia.netlify.app
                </a>
              </div>

              <img src={ItemPortfolio} alt="Alumia" />
            </PortfolioContent>
          </Wrapper>
        </PortfolioSection>

        <TechsSection>
          <Wrapper>
            <SecondaryTitle>Minhas skills</SecondaryTitle>

            <Techs />
          </Wrapper>
        </TechsSection>

        <ContactSection>
          <Wrapper>
            <SecondaryTitle>Me fale um oi</SecondaryTitle>

            <div>
              <InfoContact>
                <p>
                  Estou sempre aberto para discutir seu projeto. <br />
                  Entre em contato e vamos entender o melhor caminho para
                  criarmos o melhor job para você.
                </p>
                <p>
                  Envie um e-mail para mim em: <br />
                  <span>
                    <FaEnvelope /> alison-cruz@hotmail.com
                  </span>
                </p>

                <p>
                  Estou disponível pelo número: <br />
                  <span>
                    <FaPhoneAlt /> 11 97797-5522
                  </span>
                </p>
                <p>
                  Sigam-me os bons.
                  <br />
                  <div>
                    <FaGithub />
                    <FaLinkedinIn />
                    <FaInstagram />
                  </div>
                </p>
              </InfoContact>
              <FormContact>
                <ContactForm />
              </FormContact>
            </div>
          </Wrapper>
        </ContactSection>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
