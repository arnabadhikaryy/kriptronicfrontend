import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import MasterApp from './MasterApp';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MasterApp />
  </BrowserRouter>
);
