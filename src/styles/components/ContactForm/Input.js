import styled from "styled-components";

export const Container = styled.input`
  padding: 1rem;
  border: 1px solid #eaeaea;
  width: 100%;
  border-radius: 0.3rem;
  letter-spacing: 0.1rem;
  font-size: 0.8rem;
  font-weight: var(--main-text-color);
  font-weight: 600;
  transition: 0.5s transform cubic-bezier(0.76, 0, 0.24, 1);

  & + input {
    margin-top: 1rem;
  }

  &:focus {
    border-left: 2px solid var(--main-color);
    transform: translateX(10px) !important;
  }

  &::placeholder {
    font-weight: normal;
  }
`;
