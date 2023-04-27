import React from "react";
import JaneHopkins from "./pages/JaneHopkins";
import FDA from "./pages/FDA";
import Bavaria from "./pages/Bavaria";
import HomePage from "./pages/homePage";
import { Routes, Route } from "react-router-dom";
import { FDAUserContextProvider } from "./config/FDAUserContext";
//import TopBar from "./topBar";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path = "/" element={<HomePage />} />
        <Route path = "/JaneHopkins" element={<JaneHopkins />} />
        <Route path = "/Bavaria" element={<Bavaria />} />
        <Route path = "/FDA" element={<FDA />} />
      </Routes>
    </div>
  );
}


export default App;