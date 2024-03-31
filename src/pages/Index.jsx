import { React, useState } from 'react'
import SearchBar from '../components/SearchBar'
import NutritionsTable from '../components/NutritionsTable'
import DailyNutritionUsage from '../components/DailyNutritionUsage'

const Index = () => {
    const [results, setResults] = useState([])
    const [dailyNuts, setDailyNuts] = useState([])
    console.log(dailyNuts);
    return (
        <div>
            <div className="search-bar-container">
                <DailyNutritionUsage searchResults={dailyNuts} />
                <SearchBar setResults={setResults} />
                <NutritionsTable searchResults={results} setData={setDailyNuts} />
            </div>
        </div>
    )
}

export default Index