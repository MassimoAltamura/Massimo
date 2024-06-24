import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ShowGithubUser from './ShowGithubUser';
import { Welcome } from './Welcome';
import { Counter } from './Counter';

export function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/users/octocat">GitHub User (octocat)</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Welcome name="Massimo" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
