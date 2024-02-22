import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WindowWidth from '../src/components/WindowWidth/WindowWidth';
import LocalStorageComponent from '../src/components/LocalStorageComponent/LocalStorageComponent';
import FetchData from '../src/components/FetchData/FetchData';


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/window-width">Ширина Окна</Link>
            </li>
            <li>
              <Link to="/local-storage">Локальное Хранение</Link>
            </li>
            <li>
              <Link to="/fetch-data">Получение Данных</Link>
            </li>
          </ul>
        </nav>

        <Routes> 
        <Route path="/window-width" element={<WindowWidth />} />
        <Route path="/local-storage" element={<LocalStorageComponent />} />
        <Route path="/fetch-data" element={<FetchData />} />
        <Route path="/" element={<h1>Глпвная страница!</h1>} />
      </Routes>
      </div>
    </Router>

  );
};

export default App;

