import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    HashRouter,
    Routes,
    Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HashRouter>
          <Routes>
              <Route path={"/"} element={<App />}>
                <Route />
              </Route>
          </Routes>
      </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
