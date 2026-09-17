import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// register gsap plugins into app
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
  <main> 
    <Navbar /> 
    <Hero />
  </main>
  );
};
export default App;