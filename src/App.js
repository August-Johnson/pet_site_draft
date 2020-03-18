import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Container from "./components/Container";
import Footer from './components/Footer';

function App() {
  return (
    <Container>

      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>

      <Footer />

    </Container>
  );
}

export default App;
