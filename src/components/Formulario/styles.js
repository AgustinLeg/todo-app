import styled from "@emotion/styled";

export const FormularioStyle = styled.form`
  width: 100%;
`;

export const SearchBar = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 0.25rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 0;
  width: 100%;

  input[type="text"] {
    -webkit-appearance: none;
    background: ${({ theme }) => theme.primary};
    border: none;
    color: ${({ theme }) => theme.text};
    font-family: inherit;
    font-size: 1em;
    margin: 0;
    outline: none;
    width: 80%;
  }
`;
