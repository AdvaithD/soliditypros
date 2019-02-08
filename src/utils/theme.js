const shared = {
  primary: "#ff531f",
  secondary: "#0084ac",
  yellow: "#ffe300",
  maxWidth: "700px",
  gutter: "1rem"
};

export default {
  light: {
    light: true,
    ...shared,
    background: "white",
    foreground: "#00232d",
    tint: "#ecefef"
  },
  dark: {
    dark: true,
    ...shared,
    background: "#00232d",
    foreground: "white",
    tint: "#004a5f"
  }
};
