import React from "react";
import styled from "styled-components";
import { Grid, PageHeader } from "./ui";

const StyledLayout = styled(Grid)`
  min-height: 100vh;
  padding-top: 120px;
  grid-template-rows: min-content auto;
  position: relative;
  overflow: hidden;
  .bg-text {
    position: absolute;
    top: 200px;
    font-size: 8rem;
    opacity: 0.2;
    font-weight: 800;
    right: 0;
    z-index: -10;
    transform: translateX(30%);
    text-transform: uppercase;
    font-family: "Roboto";
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(6, 1fr);
    padding-inline-start: 1rem;
    .bg-text {
      font-size: 5.5rem;
    }
  }
`;

export const Page = ({ children, header }) => {
  // Se o header for "Sobre", usamos "About" no ID para evitar conflitos
  const normalizedHeader = header.toLowerCase() === "sobre" ? "about" : header.toLowerCase();

  console.log("Header recebido:", header); // Apenas para debug

  return (
    <StyledLayout id={`${normalizedHeader}-page`}>
      <>
        <PageHeader>{header.toUpperCase()}</PageHeader>
        {children}
      </>
      <div className="bg-text">{header}</div>
    </StyledLayout>
  );
};
