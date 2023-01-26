import React from 'react';
import { Routes , Route } from 'react-router-dom';
import DetailPage from './components/DetailPage';
import ListPage from './components/ListPage';
export default function App() {
  return (
    <Routes>
      <Route path='/' element={<ListPage/>}/>
      <Route path='/Detail' element={<DetailPage/>}/>
    </Routes>
  )
}

