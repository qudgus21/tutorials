import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { RQStudent } from "./components/RQStudent";
import { Student } from "./components/Student";
import { ParallelQueriesPage } from "./components/ParallelQueries.page";
import { DynamicParallelPage } from "./components/DynamicParallel.page";
import { DependentQueriesPage } from "./components/DependentQueries.page";

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
        <Route path="/rq-parallel" element={<ParallelQueriesPage />}></Route>
        <Route
          path="/rq-dynamic-parallel"
          element={<DynamicParallelPage studentIds={[1, 3]} />}
        ></Route>
        <Route
          path="/rq-dependent"
          element={<DependentQueriesPage email="test@gmail.com" />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
