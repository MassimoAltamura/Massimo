import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowGithubUser from './ShowGithubUser';
import { Welcome } from './Welcome';
import { Counter } from './Counter';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome name="Massimo" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes>
    </BrowserRouter>
  );
}
