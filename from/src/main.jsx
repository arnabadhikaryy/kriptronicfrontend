import { BrowserRouter  } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import Masterapp from './MasterApp'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Masterapp />
  </BrowserRouter>
)
