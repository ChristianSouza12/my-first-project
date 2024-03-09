import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importe Routes também

import Home from './containers/Home'
import Users from './containers/Users'

function AppRoutes() {
  return (
    <Router>
      <Routes> {/* Use Routes como um wrapper */}
        <Route  path="/" element={<Home />} /> {/* Use 'element' em vez de 'component' */}
        <Route path="/usuarios" element={<Users />} /> {/* Use 'element' em vez de 'component' */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;