import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/home"));
const Register = lazy(() => import("./pages/register"));
const Abstract = lazy(() => import("./pages/Abstract"));
const Schedule = lazy(() => import("./pages/Schedule"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/abstract" element={<Abstract />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
