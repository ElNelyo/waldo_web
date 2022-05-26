import React from 'react';
import HeaderBanner from './components/HeaderBanner';
import NavBar from './components/NavBar';
import Benefits from './components/Benefits';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import Genesis from './components/Genesis';
import Community from './components/Community';
import DAO from './components/DAO';
import Utility from './components/Utility';
import Distribution from './components/Distribution';
import Team from './components/Team';
import Next from './components/Next';

import Mint from './components/Mint/Mint';

import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";


const Home = () => (
  <div className="flex min-h-screen flex-col justify-center bg-gray-100">
  <NavBar />
  <HeaderBanner />
  <Community />
  <Genesis />
  <Benefits />
  <DAO />
  <Roadmap />
  <Utility />
  <Distribution />
  <Team />
  <Next />
  <Footer />
</div>
)

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route exact path="/mint" element={<Mint />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
