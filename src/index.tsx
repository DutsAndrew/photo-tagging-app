import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Leaderboard from './components/Leaderboard';
import Level1 from './components/levels/Level1';
import Level2 from './components/levels/Level2';
import Level3 from './components/levels/Level3';
import Level4 from './components/levels/Level4';
import Level5 from './components/levels/Level5';
import Level6 from './components/levels/Level6';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
          <Route path='/photo-tagging-app/' element={<Home />} />
          <Route path='/photo-tagging-app/Leaderboard' element={<Leaderboard />} />
          <Route path='/photo-tagging-app/Home/Level/1' element={<Level1 />} />
          <Route path='/photo-tagging-app/Home/Level/2' element={<Level2 />} />
          <Route path='/photo-tagging-app/Home/Level/3' element={<Level3 />} />
          <Route path='/photo-tagging-app/Home/Level/4' element={<Level4 />} />
          <Route path='/photo-tagging-app/Home/Level/5' element={<Level5 />} />
          <Route path='/photo-tagging-app/Home/Level/6' element={<Level6 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
