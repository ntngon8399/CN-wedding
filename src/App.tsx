import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import FindTable from './pages/FindTable/FindTable';
import Timeline from './pages/Timeline/Timeline';
import './App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/wedding" element={<Home />} />
          <Route path="/find-table" element={<FindTable />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
