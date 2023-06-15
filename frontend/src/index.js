import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import MainLayout from "./Components/Layouts/MainLayout";

//Pages
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Events from "./Pages/Events";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <MainLayout >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/teams" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </MainLayout>
    </Router>
  </React.StrictMode>
);
