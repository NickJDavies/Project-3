import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Quiz from "./pages/Quiz";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import Home from "./pages/Home"

function App() {
  return (
    <main>
      <Router>

        <Nav />

        <Switch>

          <Route path="/Quiz">
            <Quiz />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>

        <Footer />

      </Router>
    </main>
  );
}

export default App;