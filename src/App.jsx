import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { ApiProvider } from "./context/ApiContext";

function App() {
  return (
    <div className="App">
      <ApiProvider>
        <Header />
        <Home />
        <Footer />
      </ApiProvider>
    </div>
  );
}

export default App;
