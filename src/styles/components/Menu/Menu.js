import styled, { css } from "styled-components";

export const Container = styled.ul`
  display: flex;
  align-items: center;

  ${({ isMobile }) =>
    isMobile &&
    css`
      display: none;
    `}
`;
