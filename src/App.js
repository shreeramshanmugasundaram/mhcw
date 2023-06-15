import "./App.css";
import Nav from "./Components/Common/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Common/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Collector from "./Pages/Collector";
import Result from "./Pages/Result";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/collect" element={<Collector />} />
          <Route path="/result" element={<Result />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
