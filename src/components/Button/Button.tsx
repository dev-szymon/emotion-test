import React from "react";
import { StyledSystemUtilityProps } from "../../utils/StyledSystemUtilityProps";
import { ButtonContainer } from "./Button.styled";
import CSS from "csstype";

export const Button: React.FC<
 StyledSystemUtilityProps & { color?: CSS.Property.Color }
> = (styledSystemProps) => {
 return <ButtonContainer {...styledSystemProps}>my button</ButtonContainer>;
};
