
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu';
import Newsletter from './pages/Newsletter';
import NoPage from './pages/NoPage';
import AboutUs from './pages/AboutUs';

export default function App() {
    return (
        <div>
          <BrowserRouter>
          <Routes>
            <Route index element={<AboutUs />} />
        
            <Route path='/menu' element={<Menu />} />
            <Route path='/newsletter' element={<Newsletter />} />
            <Route path='*' element={<NoPage />} />
            <Route path='/aboutus' element={<AboutUs />} />
          </Routes>
          </BrowserRouter>
        </div>
    )
}


