import styled from "styled-components";

export const Container = styled.li`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
  margin: 2rem 0;
  gap: 0 8rem;

  > div {
    > h2 {
      line-height: 2.2rem;
    }

    > p {
      line-height: 1.8rem;
      margin: 2rem 0;
      color: var(--main-text-color);
      opacity: 0.7;
    }

    > a {
      font-size: 0.9rem;
      font-weight: 700;
    }
  }

  > img {
    width: 30rem;
    border-radius: 0.3rem;
    box-shadow: 13px 17px 30px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 72rem) {
    grid-template-columns: 1fr;

    > img {
      margin-top: 4rem;
    }
  }

  @media (max-width: 52rem) {
    margin: 4rem 0;
    > img {
      width: 100%;
    }

    > div {
      > h2 {
        font-size: 1.2rem;
        line-height: 2.2rem;
      }
    }
  }
`;
