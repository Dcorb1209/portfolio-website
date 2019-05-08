import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './Pages/Landing';
import EditProject from './Pages/EditProject';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Landing} />
        <Route path="/EditProject/" component={EditProject} />
      </div>
    </Router>
  );
}

export default App;
