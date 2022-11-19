import Game from "./pages/Game";
import MarketPlace from "./pages/MarketPlace";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Finish from "./pages/Finish";
import Play from "./pages/Play";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Powerup from "./components/Powerup";
import { useState } from "react";
import React from "react";
function App() {
  const [address , setAddress] = useState(" ")

  return (
    <>
    <BrowserRouter>
      <Routes> 
        <Route  path="/" element={<Home />} />              
          <Route  path="/dashboard" element={<Dashboard abcd={address} />} />
          <Route  path="/game" element={<Game />} />
          <Route  path="/marketplace" element={<MarketPlace />} />
          <Route  path="/finish" element={<Finish />} />
          <Route  path="/marketplace/powerup" element={<Powerup/>} />
          <Route  path="/play" element={<Play/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
