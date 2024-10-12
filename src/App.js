import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./page/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard/:view" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/dashboard/default" />} />
      </Routes>
    </Router>
  );
}

export default App;
