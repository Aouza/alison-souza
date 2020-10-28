import styled from "styled-components";

export const Container = styled.input`
  padding: 1rem;
  border: 1px solid #eaeaea;
  width: 100%;
  border-radius: 0.3rem;

  & + input {
    margin-top: 1rem;
  }
`;
