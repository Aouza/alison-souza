import styled from "styled-components";

export const Container = styled.li`
  > a {
    font-weight: 500;
    position: relative;
    display: block;
    overflow: hidden;

    &::before {
      content: "";
      z-index: 1;
      position: absolute;
      top: 0;
      left: -1px;
      bottom: 0;
      right: -1px;
      background-color: transparent;
      transform: translateX(-100%);
      transition: transform 0.6s cubic-bezier(0.6, 0, 0.4, 1);
    }

    &:hover::before {
      transform: translateX(100%);
      background-color: var(--main-color-black);
    }
  }

  & + li {
    margin-left: 2rem;
  }
`;
