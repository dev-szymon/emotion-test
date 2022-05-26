import { up } from "../../utils/up";
import { styled } from "./Button.theme";
import {
 background,
 border,
 bottom,
 boxShadow,
 color,
 compose,
 flexbox,
 grid,
 layout,
 left,
 position,
 right,
 space,
 shadow,
 top,
 typography,
} from "styled-system";

export const composedHelpers = compose(
 background,
 border,
 bottom,
 boxShadow,
 color,
 flexbox,
 grid,
 layout,
 left,
 position,
 right,
 space,
 shadow,
 top,
 typography
);

export const ButtonContainer = styled.button`
 width: 100px;
 height: 50px;
 font-weight: 700;
 font-family: sans-serif;
 border: none;
 margin: 10px;
 color: ${({ theme }) => theme.button.color};
 background-color: black;
 ${up(1)} {
  background-color: blue;
 }
 ${up(2)} {
  background-color: red;
 }
 ${composedHelpers}
`;
