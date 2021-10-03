import styled from "@emotion/styled";

export const HeaderStyles = styled.header`
  align-items: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  margin: 3rem;
  width: 100%;
  h1 {
    color: #fff;
    cursor: pointer;
    font-family: inherit;
    font-weight: 700;
    letter-spacing: 0.5rem;
    margin: 0;
    text-transform: uppercase;
    z-index: 1;
  }
`;

export const ButtonStyles = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 1;
`;
