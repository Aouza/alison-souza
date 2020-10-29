import styled from "styled-components";

export const Container = styled.h2`
  margin-bottom: 4rem;
  font-size: 2rem;
  position: relative;
  width: fit-content;

  &::before {
    content: "";
    background-color: var(--main-color);
    width: 25px;
    height: 20px;
    display: block;
    border-radius: 0.3rem;
    position: absolute;
    top: 0rem;
    left: -0.2rem;
    z-index: -1;
  }

  @media (max-width: 52rem) {
    margin-bottom: 2rem;
    font-size: 1.8rem;
  }
`;
