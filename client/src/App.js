import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./store/actions/auth.action";

export function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authModule.auth);

  useEffect(() => {
    dispatch(fetchUser());
  });

  return (
    <Router>
      <a href="/auth/google"> google</a>
      <a href="/api/logout"> logout</a>
      <Routes>
        <Route path="/surveys/new" element="" />
        <Route path="/surveys" element="" />
        <Route path="/" element="" />
      </Routes>
    </Router>
  );
}
