import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-display: optional;
  font-family: 'Roboto';
  font-style: normal;
 } 
 html {
   scroll-behavior: smooth;
 }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 10px;
  padding-left: 10px;
`;

//Product Button Card
export const CardButton = styled.button`
  font-weight: bold;
  background-color: #4ed17b;
  color: #ffffff;
  border: 2px solid #4ed17b;
  border-radius: 5px;
  height: 40px;
  width: 50px;
  white-space: nowrap;
  outline: none;
  cursor: pointer;
`;

export default GlobalStyle;
