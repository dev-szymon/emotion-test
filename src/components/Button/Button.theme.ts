import CSS from "csstype";
import emotionStyled from "@emotion/styled";

export type ButtonTheme = {
 button: {
  color: CSS.Property.BackgroundColor;
 };
};

export const styled = emotionStyled;
