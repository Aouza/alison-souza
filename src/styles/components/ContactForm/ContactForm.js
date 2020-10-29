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
    transition: 0.5s transform cubic-bezier(0.76, 0, 0.24, 1);
    letter-spacing: 0.1rem;
    font-size: 0.8rem;
    font-weight: var(--main-text-color);
    font-weight: 600;

    &:focus {
      border-left: 2px solid var(--main-color);
      transform: translateX(10px) !important;
    }

    &::placeholder {
      font-weight: normal;
    }
  }
`;
