import React from 'react'
import NutritionItem from './NutritionItem'
import './NutritionsTable.css'

const NutritionsTable = ({ searchResults }) => {
    console.log(searchResults)
    return (
        <table id='nutTable'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Calories</th>
                    <th>Proteins</th>
                    <th>Carbs</th>
                    <th>Fats</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {searchResults.map((result) => { return <NutritionItem key={result.id} props={result}/>})}
            </tbody>
        </table>
    )
}

export default NutritionsTable