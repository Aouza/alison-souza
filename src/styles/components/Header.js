import styled, { css } from "styled-components";

export const Container = styled.header`
  > article {
    background: var(--main-color);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;

    > div {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }

    > div:nth-child(1) {
      width: 100%;
      background: var(--main-color-black);
    }

    > div:nth-child(2) {
      width: 0;
      background: pink;
    }

    > ul {
      z-index: 99999999999999;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 2rem;

      li {
        padding: 1rem;

        color: #ffffff;
      }
    }
  }
`;

export const Wrapper = styled.div`
  height: 100px;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    z-index: 99999999;
    background: rgb(255, 255, 255);
    width: 30px;
    height: 30px;
    border-radius: 100%;
    padding: 0.3rem;
    box-sizing: initial;
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;

    ${({ isMobile }) =>
      isMobile &&
      css`
        display: block;
      `}
  }

  @media (max-width: 72rem) {
    max-width: 50rem;
  }
`;

export const Logo = styled.img`
  width: 10rem;
`;
