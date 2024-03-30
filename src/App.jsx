import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import NutritionsTable from './components/NutritionsTable'

function App() {

  const [results, setResults] = useState([])
  return (
    <div className='App'>
      <div className="search-bar-container">
        <SearchBar setResults={setResults}/>
        <NutritionsTable searchResults={results}/>
      </div>
    </div>
  )
}

export default App
