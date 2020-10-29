import styled, { css } from "styled-components";

const skillsBackground = {
  html5: css`
    background-image: radial-gradient(circle, #e44d2630, #ffffff);
    animation: circle1 30s linear infinite;
  `,
  css3: css`
    background-image: radial-gradient(circle, #264de430, #ffffff);
    animation: circle2 30s linear infinite;
  `,
  javascript: css`
    background-image: radial-gradient(circle, #e6a32930, #ffffff);
    animation: circle3 40s linear infinite;
  `,
  reactjs: css`
    background-image: radial-gradient(circle, #61dafb30, #ffffff);
    animation: circle4 50s linear infinite;
  `,
  nextjs: css`
    background-image: radial-gradient(circle, #00000010, #ffffff);
    animation: circle5 70s linear infinite;
  `,
  wordpress: css`
    background-image: radial-gradient(circle, #00769d30, #ffffff);
    animation: circle6 30s linear infinite;
  `,
  git: css`
    background-image: radial-gradient(circle, #dd4c3530, #ffffff);
    animation: circle7 50s linear infinite;
  `,
};

export const Container = styled.li`
  @keyframes circle1 {
    from {
      transform: rotate(0deg) translate(-30px) rotate(0deg);
    }
    to {
      transform: rotate(360deg) translate(-30px) rotate(-360deg);
    }
  }

  @keyframes circle2 {
    from {
      transform: rotate(360deg) translate(-30px) rotate(-360deg);
    }
    to {
      transform: rotate(0deg) translate(-30px) rotate(0deg);
    }
  }

  @keyframes circle3 {
    from {
      transform: rotate(360deg) translate(-30px) rotate(-360deg);
    }
    to {
      transform: rotate(0deg) translate(-30px) rotate(0deg);
    }
  }

  @keyframes circle4 {
    from {
      transform: rotate(360deg) translate(-60px) rotate(-360deg);
    }
    to {
      transform: rotate(0deg) translate(-60px) rotate(0deg);
    }
  }

  @keyframes circle5 {
    from {
      transform: rotate(360deg) translate(-80px) rotate(-360deg);
    }
    to {
      transform: rotate(0deg) translate(-80px) rotate(0deg);
    }
  }

  @keyframes circle6 {
    from {
      transform: rotate(-360deg) translate(-80px) rotate(360deg);
    }
    to {
      transform: rotate(0deg) translate(-80px) rotate(0deg);
    }
  }

  @keyframes circle7 {
    from {
      transform: rotate(-360deg) translate(-50px) rotate(360deg);
    }
    to {
      transform: rotate(0deg) translate(-50px) rotate(0deg);
    }
  }

  > img {
    position: relative;
    width: 4rem;
    border-radius: 2rem;
    padding: 1rem;
    box-sizing: initial;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.06);
    ${({ type }) => skillsBackground[type]};
  }
`;
