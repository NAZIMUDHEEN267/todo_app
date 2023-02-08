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
        sm_text: "#455072"
    }
}

export const light = {
    ...DefaultTheme,
    colors: {
        background: "#fff",
        card: "#fff",
        text: "#555",
        border: "#555",
        box: "#455072",
        button: "#41c5e2",
    }
}