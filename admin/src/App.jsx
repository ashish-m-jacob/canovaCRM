import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignup from "./pages/loginSignup";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignup />}>
          {" "}
        </Route>
        <Route path="/home" element={<Home />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
