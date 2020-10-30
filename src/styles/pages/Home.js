import styled from "styled-components";

export const Container = styled.main`
  min-height: calc(100vh - 100px);
  padding-top: 4rem;

  @media (max-height: 625px) {
    padding: 2rem 0;
  }

  @media (max-width: 52rem) {
    padding: 3rem 0;
  }
`;

export const Wrapper = styled.div`
  max-width: 70rem;
  height: 100%;
  width: 100%;
  padding: 0 1rem 4rem 1rem;
  margin: 0 auto;
  position: relative;

  @media (max-width: 72rem) {
    max-width: 50rem;
  }

  @media (max-width: 52rem) {
    max-width: 30rem;
    padding: 0 1rem 2rem 1rem;
  }
`;

export const HeroHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;

  > img {
    width: 10rem;
    border-radius: 100%;
    margin-bottom: 2rem;
    box-shadow: -10px 0px var(--main-color), 10px 10px 20px #24dec01c,
      -20px 10px 20px #24dec017;
  }

  > h1 {
    font-size: 1.6rem;
    font-weight: 100;
  }

  > h2 {
    margin: 1.4rem 0;
    font-size: 3rem;
    position: relative;

    &:after {
      content: "";
      background-color: var(--main-color);
      height: 3rem;
      width: 60%;
      display: block;
      margin: 0 auto;
      position: absolute;
      right: 10%;
      bottom: -10px;
      z-index: -1;
      filter: blur(10px);
      animation: enterFill 4s forwards;

      @keyframes enterFill {
        0% {
          opacity: 0;
        }

        80% {
          opacity: 0;
        }

        100% {
          opacity: 0.2;
        }
      }
    }
  }

  > p {
    margin: 0.5rem 0 2rem 0;
    line-height: 1.4;
  }

  > span {
    font-size: 0.9rem;
    font-weight: 500;

    &::before {
      content: "";
      width: 10px;
      height: 10px;
      background-color: #6cea6c;
      box-shadow: 2px 2px 5px #6cea6c63;
      border-radius: 100%;
      display: inline-block;
      margin-right: 1rem;
    }
  }

  > button {
    padding: 1rem 2rem;
    background-color: var(--main-color-black);
    color: var(--main-color-white);
    margin: 1rem 0 2rem 0;
    letter-spacing: 1.4px;
    border-radius: 0.3rem;
    position: relative;

    &:hover div,
    &focus div {
      width: 100%;
    }

    > div {
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--main-color-white);
      transition: 1s width cubic-bezier(0.85, 0, 0.15, 1);

      > svg {
        color: var(--main-color-white);
        font-size: 1rem;
      }
    }
  }

  @media (max-height: 657px) {
    > img {
      width: 8rem;
    }

    > h1 {
      font-size: 1.4rem;
    }
    > h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 72rem) {
    > h1 {
      font-size: 1.4rem;
      font-weight: 100;
    }

    > h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 52rem) {
    > h1 {
      font-size: 1rem;
      font-weight: 100;
    }

    > h2 {
      font-size: 1.4rem;
      margin: 1.4rem 0;
    }

    > p {
      font-size: 0.8rem;
    }

    > img {
      width: 6rem;
    }
  }

  @media (max-width: 32rem) {
    > h2 {
      font-size: 1rem;
      margin: 1.4rem 0;
      line-height: 1.4rem;
    }

    > p {
      font-size: 0.8rem;
      line-height: 1.4rem;
    }
  }
`;

export const SocialGroup = styled.div`
  position: absolute;
  bottom: 10rem;
  right: 0.5rem;
  display: flex;
  flex-direction: column;

  > svg {
    font-size: 1rem;
    padding: 1rem 0.5rem;
    box-sizing: initial;
    box-shadow: 4px 6px 20px #0000001a;
    cursor: pointer;

    & + svg {
      margin-top: 1rem;
    }
  }

  @media (max-width: 52rem) {
    position: initial;
    justify-content: center;
    flex-direction: row;

    > svg {
      & + svg {
        margin-top: 0;
        margin-left: 1rem;
      }
    }
  }
`;

export const AboutSection = styled.section`
  padding-top: 6rem;
  overflow: hidden;

  > div {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    justify-content: space-between;
  }

  @media (max-width: 52rem) {
    padding-top: 4rem;

    > div {
      grid-template-columns: 1fr;
    }
  }
`;

export const AboutContent = styled.div`
  padding-right: 6rem;
  position: relative;

  &::before {
    content: "";
    width: 24rem;
    height: 16rem;
    transform: rotate(-10deg);
    filter: blur(30px);
    z-index: -1;
    position: absolute;
    display: block;
    background-color: var(--main-color);
    border-radius: 100%;
    opacity: 0.2;
  }

  > p {
    line-height: 1.6rem;
    text-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 52rem) {
    padding-right: 0;

    &::before {
      width: 14rem;
    }
  }
`;

export const ImageAbout = styled.div`
  background-color: var(--main-color);
  width: fit-content;
  margin: 0 auto;
  border-radius: 0.3rem;

  > img {
    width: 18rem;
    position: relative;
    margin: 2rem auto;
    display: block;
    transform: rotate(-4deg) rotateX(0);
    box-shadow: 30px 30px 30px rgba(0, 0, 0, 0.4);
    border-radius: 0.3rem;
  }

  @media (max-width: 52rem) {
    margin: 4rem auto 0 auto;
  }
`;

export const PortfolioSection = styled.section`
  padding-top: 6rem;
`;

export const TechsSection = styled.section`
  > div > h2 {
    margin-bottom: 6rem;
  }
`;

export const ContactSection = styled.section`
  padding-top: 8rem;

  > div > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "infoContact formContact";
    gap: 4rem;
  }

  @media (max-width: 52rem) {
    > div > div {
      grid-template-columns: 1fr;
      grid-template-areas:
        "infoContact"
        "formContact";
      gap: 2rem;
    }
  }
`;

export const ImageContact = styled.div`
  grid-area: imageContact;

  > img {
    width: 35rem;
  }
`;

export const InfoContact = styled.div`
  grid-area: infoContact;

  > p {
    margin-bottom: 3rem;
    color: #163530a6;
    line-height: 1.4;

    > div {
      margin-top: 0.6rem;
      display: flex;
      align-items: center;
      font-size: 1.2rem;
      color: var(--main-dark-gray);

      > svg {
        margin-right: 1rem;
      }
    }

    > div {
      display: flex;
      align-items: center;
      margin-top: 1rem;

      > svg {
        font-size: 1.4rem;
        cursor: pointer;

        & + svg {
          margin-left: 1rem;
        }
      }
    }
  }
`;

export const FormContact = styled.div`
  grid-area: formContact;
`;
