import CSS from "csstype";
import emotionStyled, { CreateStyled } from "@emotion/styled";

export type ButtonTheme = {
 button: {
  color: CSS.Property.Color;
 };
};

export const styled: CreateStyled<ButtonTheme> = emotionStyled;
