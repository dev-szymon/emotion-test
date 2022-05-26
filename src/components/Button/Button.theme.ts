import CSS from "csstype";
import emotionStyled, { CreateStyled } from "@emotion/styled";

export type ButtonTheme = {
 button: {
  backgroundColor: CSS.Property.BackgroundColor;
 };
};

export const styled: CreateStyled<ButtonTheme> = emotionStyled;
