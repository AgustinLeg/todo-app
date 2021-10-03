import styled from "@emotion/styled";

export const Task = styled.li`
  background-color: ${({ theme }) => theme.primary};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 15px;
  span {
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    margin: 0 20px;
    width: 80%;
    &.complete {
      color: hsl(234, 11%, 52%);
      text-decoration: line-through;
      transition: all 0.2s linear;
    }
  }
  button {
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }
`;
