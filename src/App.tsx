import './App.css';
import Banner from './components/Banner'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Business from './components/Business';
import Owner from './components/Owner';

function App() {
  return (
    <BrowserRouter>
    <Banner/>
    <Sidebar/>
      <Routes>
        <Route path='/' element={<Business/>}/>
        <Route path='/owner' element={<Owner/>}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
