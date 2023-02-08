import { Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

export const SPACE = width * .01 + "px";
export const SIDE_CARD_SPACE = (width * .08) / 2 + "px";
