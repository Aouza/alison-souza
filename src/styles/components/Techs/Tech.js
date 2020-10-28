import styled, { css } from "styled-components";

const skillsBackground = {
  html5: css`
    background-image: radial-gradient(circle, #e44d2630, #ffffff);
  `,
  css3: css`
    background-image: radial-gradient(circle, #264de430, #ffffff);
  `,
  javascript: css`
    background-image: radial-gradient(circle, #e6a32930, #ffffff);
  `,
  reactjs: css`
    background-image: radial-gradient(circle, #61dafb30, #ffffff);
  `,
  nextjs: css`
    background-image: radial-gradient(circle, #00000010, #ffffff);
  `,
  wordpress: css`
    background-image: radial-gradient(circle, #00769d30, #ffffff);
  `,
  git: css`
    background-image: radial-gradient(circle, #dd4c3530, #ffffff);
  `,
};

export const Container = styled.li`
  > img {
    width: 4rem;
    border-radius: 2rem;
    padding: 1rem;
    box-sizing: initial;

    ${({ type }) => skillsBackground[type]};
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.06);
  }
`;
