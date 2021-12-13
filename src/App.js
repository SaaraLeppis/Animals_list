import React from "react";
import Main from "./components/Main"
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  )
}

export default App;