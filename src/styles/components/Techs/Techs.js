import styled from "styled-components";

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;

  @media (max-width: 52rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
