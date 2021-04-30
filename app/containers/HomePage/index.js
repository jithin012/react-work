import React from 'react';

import './index.scss'; // base declaration
import './_utils.scss'; // all reusing classes and animations
import './_button.scss'; //
import './_grid.scss';

import Header from './header';

import Main_1 from './MainComponent/Main_1';
import Main_2 from './MainComponent/Main_2';
import Main_3 from './MainComponent/Main_3';
import Main_4 from './MainComponent/Main_4';
import Main_5 from './MainComponent/Main_5';

import Footer from './footer';

export default function HomePage() {
  return (
    <div className="homepage-container">
      <Header />
      <main>
        <Main_1 />
        <Main_2 />
        <Main_3 />
        <Main_4 />
        <Main_5 />
      </main>
      <Footer />
    </div>
  );
}