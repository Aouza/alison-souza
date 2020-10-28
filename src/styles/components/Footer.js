import styled from "styled-components";

export const Container = styled.footer`
  background-color: #fafafa;
`;

export const Wrapper = styled.div`
  height: 100px;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  > p > span {
    color: var(--main-color);
    margin: 0 0.5rem;
    letter-spacing: 0.1rem;
  }

  > p > svg {
    margin: 0 0.5rem;
  }

  @media (max-width: 72rem) {
    max-width: 50rem;
  }

  @media (max-width: 52rem) {
    line-height: 2rem;
  }
`;
