import styled from "styled-components";

export const Container = styled.button`
  padding: 1rem 2rem;
  background-color: var(--main-color);
  margin-top: 3rem;
  border-radius: 0.3rem;
  color: var(--main-color-white);
  font-size: 0.8rem;
  display: flex;
  font-weight: 900;
  letter-spacing: 0.1rem;
  box-shadow: 10px 10px 10px #24dec026;
  position: relative;

  > div {
    position: absolute;
    width: 100%;
    height: 100%;

    > svg {
      color: var(--main-color-white);
    }
  }
`;
