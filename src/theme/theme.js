import { DarkTheme, DefaultTheme } from "@react-navigation/native";

export const dark = {
    ...DarkTheme,
    colors: {
        background: "#05103A",
        card: "#101C43",
        title: "#fff",
        text: "#fff",
        box: "#2d3758",
        button: "#41c5e2",
        sm_text: "#455072",
        buttonTxt: "#fff"
    }
}

export const light = {
    ...DefaultTheme,
    colors: {
        background: "#fff",
        card: "#fff",
        text: "#000",
        border: "#555",
        box: "rgba(0, 0, 0, 0.1)",
        button: "#41c5e2",
        buttonTxt: "#fff"
    }
}