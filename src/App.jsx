import "./App.css";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { cacheRtl, theme } from "./theme/Theme";
function App() {
 
  return (

    <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>

    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
    </ThemeProvider>
    </CacheProvider>

    
  );
}

export default App;
