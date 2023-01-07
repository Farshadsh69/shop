import React from "react";
import MasterLayout from "./screens/masterLayout";
import theme from "./theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import RTL from "./components/RTL";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <RTL>
          <CssBaseline>
            <MasterLayout />
          </CssBaseline>
        </RTL>
      </ThemeProvider>
    </div>
  );
}

export default App;
