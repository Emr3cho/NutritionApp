import './App.css'
import { React, useState } from 'react'
import Index from './pages/Index'
import Layout from './components/Layout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Add from './pages/Add'


function App() {
  const [dailyNuts, setDailyNuts] = useState([])

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route element={<Layout />} path='/'>
            <Route element={<Index dailyNuts={dailyNuts} setDailyNuts={setDailyNuts} />} index />
            <Route element={<Add />} path='add' />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
