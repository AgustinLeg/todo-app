import React from "react";
import styled from "@emotion/styled";

const ErrorStyle = styled.div`
  position: absolute;
  top: 20px;
  right: 5px;
  background: #fc4e4e;
  color: #fff;
  padding: 10px 20px;
  transition: right 0.3s ease-in-out;
  animation: active 5s ease-in-out;
`;

const Error = ({ msg }) => {
  return <ErrorStyle>{msg}</ErrorStyle>;
};

export default Error;
