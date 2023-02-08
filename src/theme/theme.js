import { DarkTheme, DefaultTheme } from "@react-navigation/native";

export const dark = {
    ...DarkTheme,
    colors: {
        background: "#05103A",
        card: "#101C43",
        text: "#fff",
        box: "#2a306b",
        button: "#41c5e2",
        sm_text: "#bec4bf",
        buttonTxt: "#fff"
    }
}

export const light = {
    ...DefaultTheme,
    colors: {
        background: "#fff",
        card: "#fff",
        text: "#000",
        box: "rgba(0, 0, 0, 0.1)",
        button: "#41c5e2",
        sm_text: "#455072",
        buttonTxt: "#fff"
    }
}