import { DarkTheme, DefaultTheme } from "@react-navigation/native";

export const dark = {
    ...DarkTheme,
    colors: {
        background: "#05103A",
        card: "#101C43",
        text: "#fff",
        box: "#2a306b",
        sm_text: "#bec4bf",
        buttonTxt: "#fff",
        todoBox: "#223767"
    }
}

export const light = {
    ...DefaultTheme,
    colors: {
        background: "#fff",
        card: "#fff",
        text: "#000",
        box: "rgba(0, 0, 0, 0.1)",
        sm_text: "#455072",
        buttonTxt: "#fff",
        todoBox: "#fff"
    }
}