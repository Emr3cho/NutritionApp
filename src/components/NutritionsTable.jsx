import React from 'react'
import NutritionItem from './NutritionItem'
import './NutritionsTable.css'

const NutritionsTable = ({ searchResults, setData }) => {
    const handleClick = (result) => {
        const updatedResult = { ...result, id: Date.now() };
        setData(prev => [...prev, updatedResult])
    }
    return (
        <table id='nutTable'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Calories</th>
                    <th>Proteins</th>
                    <th>Carbs</th>
                    <th>Fats</th>
                </tr>
            </thead>
            <tbody>
                {searchResults.map((result) => { return <NutritionItem key={result.id} nutrition={result} onClick={() => handleClick(result)}/>})}
            </tbody>
        </table>
    )
}

export default NutritionsTable