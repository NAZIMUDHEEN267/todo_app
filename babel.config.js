module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    ["module-resolver", {
      "root": ["./src"],
      "extensions": [".js", ".ios.js", ".android.js"],
      "alias": {
        "Assets": "./assets",
        "Components": "./components",
        "Constants": "./src/constants",
        "Helper": "./helper",
        "Navigation": "./navigation",
        "Screens": "./screens",
        "Slices": "./slices",
        "Store": "./store",
        "Theme": "./theme"
      }
    }],
  ]
};
