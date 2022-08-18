import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Test from "./Components/Test";
import { Suspense } from "react";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          {/* Role Managment Routes */}
          <Route path="/" element={<Test />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
