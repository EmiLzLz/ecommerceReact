import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { ApiProvider } from "./context/ApiContext";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <div className="App relative">
      <ApiProvider>
        <HashRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/about" element={<About />} />
          </Routes>
        </HashRouter>
        <Footer />
      </ApiProvider>
    </div>
  );
}

export default App;
