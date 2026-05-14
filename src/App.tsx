/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';
import { Home } from './pages/Home';

function App() {
  const { isRtl } = useLanguage();

  return (
    <div className={`min-h-screen bg-luxury-cream ${isRtl ? 'rtl' : ''}`}>
      <HashRouter>
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;

