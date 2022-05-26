import { up } from "../../utils/up";
import { ButtonTheme, styled } from "./Button.theme";
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
 background-color: ${({ theme }: { theme: ButtonTheme }) =>
  theme.button.backgroundColor};
 color: black;
 ${up(1)} {
  width: 200px;
  color: white;
 }
 ${up(2)} {
  width: 300px;
  color: red;
 }
 ${composedHelpers}
`;
