import styled from 'styled-components';

export const Buttons = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const Button = styled.button`
  position: relative;
  display: inline-block;
  font-family: Arial, Helvetica, FreeSans, 'Liberation Sans', 'Nimbus Sans L',
    sans-serif;
  font-size: 1.5em;
  font-weight: 700;
  color: rgb(245, 245, 245);
  text-shadow: 0 -1px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  user-select: none;
  padding: 0.3em 1em;
  outline: none;
  border: none;
  border-radius: 3px;
  background: #0c9c0d linear-gradient(#82d18d, #0c9c0d);
  box-shadow: inset #72de26 0 -1px 1px, inset 0 1px 1px #98ff98,
    #3caa3c 0 0 0 1px, rgba(0, 0, 0, 0.3) 0 2px 5px;
  -webkit-animation: pulsate 1.2s linear infinite;
  animation: pulsate 1.2s linear infinite;
  cursor: pointer;
`;
