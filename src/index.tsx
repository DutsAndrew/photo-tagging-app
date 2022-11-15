import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { 
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import MainPage from './components/MainPage';
// import Leaderboard from './components/Leaderboard';
// import Level1 from './components/levels/Level1';
// import Level2 from './components/levels/Level2';
// import Level3 from './components/levels/Level3';
// import Level4 from './components/levels/Level4';
// import Level5 from './components/levels/Level5';
// import Level6 from './components/levels/Level6';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
