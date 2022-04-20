import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { RQStudent } from "./components/RQStudent";
import { Student } from "./components/Student";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/rq-student">rq-student</Link>
        </li>
        <li>
          <Link to="/student">student</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/rq-student" element={<RQStudent />}></Route>
        <Route path="/student" element={<Student />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
