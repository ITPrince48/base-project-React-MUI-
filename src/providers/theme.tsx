import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "../assets/css/index.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { light } from "config/theme/light";

type MuiThemeProviderProps = {
  children: React.ReactNode;
};

// ** Declare Theme Provider
const MuiThemeProvider: React.FC<MuiThemeProviderProps> = ({ children }) => {
  const theme = createTheme(light);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiThemeProvider;
