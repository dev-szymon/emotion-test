import CSS from "csstype";
import emotionStyled from "@emotion/styled";

export type ButtonTheme = {
 button: {
  backgroundColor: CSS.Property.BackgroundColor;
 };
};

export const styled = emotionStyled;
