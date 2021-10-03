import styled from "@emotion/styled";

export const Container = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: row;
  font-size: 0.8em;
  justify-content: space-between;
  padding: 15px;
`;

export const BotonesContainer = styled.div`
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  padding: 15px 0;
  border-radius: 0.25rem;
  @media (max-width: 400px) {
    position: absolute;
    bottom: 10%;
    left: 0;
    width: 100%;
  }
`;

export const BotonesLinks = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 700;
  margin: 0 10px;
  outline: none;
  transition: color 0.3s ease;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.textHover};
  }
  &.active {
    color: hsl(220, 98%, 61%);
  }
`;
