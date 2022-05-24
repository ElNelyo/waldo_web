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

const App = () => (
  <div className="flex min-h-screen flex-col justify-center bg-gray-100">
    <NavBar />
    <HeaderBanner />
    <Roadmap />
    <Benefits />
    <DAO />
    <Community />
    <Genesis />
    <Utility />
    <Distribution />
    <Team />
    <Footer />
  </div>
);

export default App;
