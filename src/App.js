import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Discover from "./pages/Discover/Discover";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Projectpage from "./pages/ProjectPage/Projectpage";
import NewPost from "./pages/NewPost/Newpost";
const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#ff4400",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      // contrastText: "#ffcc00",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route exact path="discover" element={<Discover />} />
          <Route exact path="newpost" element={<NewPost />} />
          <Route path="post/:project_id" element={<Projectpage/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
