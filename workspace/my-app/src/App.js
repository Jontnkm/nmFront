import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './pages/modules/default.scss';

import Home from './pages/Home';

import About from './pages/about/About';
import Culture from './pages/about/Culture';
import CultureDetail from './pages/about/CultureDetail';
import Professional from './pages/about/Professional';

import Diary from './pages/service/Diary';
import Tax from './pages/service/Tax';
import Transfer from './pages/service/Transfer';

import Education from './pages/special/Education';

import Board from './pages/memory/Board';
import BoardDetail from './pages/memory/BoardDetail';

import Consult from './pages/memory/Board';
import Location from './pages/memory/Board';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>

        <Route path='/about' element={<About/>}></Route>
        <Route path='/culture' element={<Culture/>}></Route>
        <Route path='/cultureDetail' element={<CultureDetail/>}></Route>
        <Route path='/professional' element={<Professional/>}></Route>

        <Route path='/diary' element={<Diary/>}></Route>
        <Route path='/tax' element={<Tax/>}></Route>
        <Route path='/transfer' element={<Transfer/>}></Route>

        <Route path='/education' element={<Education/>}></Route>

        <Route path='/board' element={<Board/>}></Route>
        <Route path='/boardDetail' element={<BoardDetail/>}></Route>

        <Route path='/consult' element={<Consult/>}></Route>
        <Route path='/location' element={<Location/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
