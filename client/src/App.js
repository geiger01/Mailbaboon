import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";

export function App() {
  return (
    <Router>
      <a href="/auth/google"> google</a>
      <Routes>
        <Route path="/" element="" />
      </Routes>
    </Router>
  );
}
