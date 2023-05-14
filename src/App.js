import "./App.css";
import Create from "./pages/Create";
import Read from "./pages/Read";
import Update from "./pages/Update";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
