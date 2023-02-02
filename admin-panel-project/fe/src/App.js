import "./App.css";
import SideBar from "./pages/sideBar";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <Container>
      <ThemeProvider theme={darkTheme}>
        <div className="App">
          <CssBaseline />

          <SideBar />
        </div>
      </ThemeProvider>
    </Container>
  );
}

export default App;
