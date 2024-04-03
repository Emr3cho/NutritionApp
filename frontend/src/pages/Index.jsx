import { React, useState } from 'react'
import SearchBar from '../components/SearchBar'
import NutritionsTable from '../components/NutritionsTable'
import DailyNutritionUsage from '../components/DailyNutritionUsage'

const Index = ({ dailyNuts, setDailyNuts }) => {
    const [results, setResults] = useState([])
    return (
        <div>
            <div className="search-bar-container">
                <DailyNutritionUsage searchResults={dailyNuts} setNuts={setDailyNuts} />
                <SearchBar setResults={setResults} />
                <NutritionsTable searchResults={results} setData={setDailyNuts} />
            </div>
        </div>
    )
}

export default Index