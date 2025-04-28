import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

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

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>

        <Route path='/about' element={<About/>}></Route>
        <Route path='/Culture' element={<Culture/>}></Route>
        <Route path='/CultureDetail' element={<CultureDetail/>}></Route>
        <Route path='/Professional' element={<Professional/>}></Route>

        <Route path='/Diary' element={<Diary/>}></Route>
        <Route path='/Tax' element={<Tax/>}></Route>
        <Route path='/Transfer' element={<Transfer/>}></Route>

        <Route path='/Education' element={<Education/>}></Route>

        <Route path='/Board' element={<Board/>}></Route>
        <Route path='/BoardDetail' element={<BoardDetail/>}></Route>

        <Route path='/Consult' element={<Consult/>}></Route>
        <Route path='/Location' element={<Location/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
