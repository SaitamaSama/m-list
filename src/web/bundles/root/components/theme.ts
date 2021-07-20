import { createTheme } from "@material-ui/core";

export function getTheme(mode: "light" | "dark" = "light") {
  return createTheme({
    palette: {
      type: mode,
      primary: {
        main: "#c9fdff",
      },
      secondary: {
        main: "#ffa7a7",
      },
    },
    typography: {
      fontFamily: "'Work Sans', Sen, sans-serif",
      fontWeightBold: 700,
      fontWeightMedium: 500,
      fontWeightRegular: 400,
      fontSize: 15,
      h4: {
        fontWeight: 700,
      },
      h3: {
        fontWeight: 700,
      },
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 700,
      },
      h6: {
        fontWeight: 700,
      },
      h5: {
        fontWeight: 700,
      },
    },
    shape: {
      borderRadius: 5,
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": {},
        },
      },
      MuiButton: {
        label: {},
      },
    },
  });
}
