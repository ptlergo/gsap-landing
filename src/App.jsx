import React from 'react';
import gsap from 'gsap';
// import {scrollTrigger, splitText } from 'gsap/all';

// register gsap plugins into app
// gsap.registerPlugin(scrollTrigger, splitText);

const App = () => {
  return (
    <div className="flex-center h-[100vh]">
      <h1 className="text-3xl font-bold">Hello, World!</h1>
      <p>Welcome to my React application.</p>
    </div>
  );
};
export default App;