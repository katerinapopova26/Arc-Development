import React from "react";
import Header from "./ui/Header";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./ui/Theme";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" Component={() => <div>Home</div>} />
            <Route path="/services" Component={() => <div>Services</div>} />
            <Route
              path="/customsoftware"
              Component={() => <div>Custom Software</div>}
            />
            <Route
              path="/mobileapps"
              Component={() => <div>Mobile Apps</div>}
            />
            <Route path="/websites" Component={() => <div>Web Sites</div>} />
            <Route path="/revolution" Component={() => <div>Revolution</div>} />
            <Route path="/about" Component={() => <div>About us</div>} />
            <Route path="/contact" Component={() => <div>Contact</div>} />
            <Route path="/estimate" Component={() => <div>Estimate</div>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
