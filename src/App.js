import React from 'react';
import HeaderBanner from './components/HeaderBanner';
import NavBar from './components/NavBar';
import Benefits from './components/Benefits';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import Genesis from './components/Genesis';
import Community from './components/Community';
import DAO from './components/DAO';

const App = () => (
  <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-6 sm:py-12">
    <NavBar />
    <HeaderBanner />
    <Roadmap />
    <Benefits />
    <DAO />
    <Community />
    <Genesis />
    <Footer />
  </div>
);

export default App;
