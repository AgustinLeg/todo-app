import styled from "@emotion/styled";

export const FormularioStyle = styled.form`
  width: 100%;
  border: 2px solid transparent;
  &.error {
    border-color: #cc0000;
    border-radius: 0.25rem;
  }
`;

export const SearchContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 0.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  width: 100%;
  .error-container {
    width: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 14px;
    }
  }

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
    flex-grow: 1;
  }
`;
