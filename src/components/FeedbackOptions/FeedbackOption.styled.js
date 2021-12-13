import styled from "@emotion/styled";

export const ButtonItem = styled.button`
background-color: transparent;
  border: 2px solid #000;
  border-radius: 0.6em;

  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;

  display:flex;
  justify-content:space-between;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase
  font-weight: 700

  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

  &:hover {
  box-shadow: 0 0 40px 40px #222 inset;
}`;

export const Buttons = styled.div`
  display: flex;
`;
