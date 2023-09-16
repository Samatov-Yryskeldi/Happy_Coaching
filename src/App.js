import "./App.css";
import Header from "./components/js/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Block1/Home";
import Service from "./components/Service/Block1/Service";
import About from "./components/About_Us/About";
import Extra from "./components/Extra/Extra";
import Free from "./components/Free/Free";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />{" "}
          <Route path="/extra" element={<Extra />} />
          <Route path="/free" element={<Free />} />
        </Routes>{" "}
      </Router>{" "}
    </div>
  );
}

export default App;
