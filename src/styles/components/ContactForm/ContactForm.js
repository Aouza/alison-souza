import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > textarea {
    margin-top: 1rem;
    width: 100%;
    border-color: #eaeaea;
    resize: none;
    padding: 1rem;
    outline: none;
    border-radius: 0.3rem;
  }
`;
