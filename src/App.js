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
import Testnew from "./Components/Testnew";
import Memo from "./Components/Memo";
import SingleAlbum from "./Components/SingleAlbum";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          {/* Role Managment Routes */}
          <Route path="/" element={<Memo />} />
          <Route path="/profile/:userId" element={<Test />} />
          <Route path="/album" element={<SingleAlbum />} />
          <Route path="/test" element={<Testnew />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
