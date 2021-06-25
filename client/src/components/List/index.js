import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (

    <Container className="container">{children}</Container>
  );
}

export function ListItem({ children }) {
  return <div>{children}</div>;
}
