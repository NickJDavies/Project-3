import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Quiz from "./pages/Quiz";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer"

function App() {
  return (
    <main>
      <Nav />
      
      <Quiz />

      <Footer />
    </main>
  );
}

export default App;
