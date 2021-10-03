import React from "react";
import styled from "@emotion/styled";

const CheckBox = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  border-radius: 100%;
  border: 1px solid hsl(233, 14%, 35%);
  cursor: pointer;
  height: 20px;
  margin: 0 1rem;
  min-height: 20px;
  min-width: 20px;
  outline: none;
  position: relative;
  transition: 0.3s;
  width: 20px;
  &:before {
    content: url("../images/icon-check.svg");
    position: absolute;
    top: 2px;
    left: 4px;
    opacity: 0;
    transition: 0.2s;
  }
  &:checked:before {
    opacity: 1;
  }
  &:checked {
    background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  }
`;

const ButtonCheck = ({ action, dataId, checked }) => {
  return (
    <CheckBox
      type="checkbox"
      data-id={dataId}
      onChange={action}
      checked={checked}
    />
  );
};

export default ButtonCheck;
