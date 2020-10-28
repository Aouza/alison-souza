import styled from "styled-components";

export const Container = styled.li`
  > a {
    font-weight: 500;
  }

  & + li {
    margin-left: 2rem;
  }
`;
