import React from 'react'
import DailyUsageNutritionitem from './DailyUsageNutritionitem'

const DailyNutritionUsage = ({searchResults, setNuts}) => {
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
                {searchResults.map((result) => { return <DailyUsageNutritionitem key={result.id} nutrition={result} setNuts={setNuts}/> })}
            </tbody>
            <tfoot>
                <tr>
                    <th>Total</th>
                    <th>{searchResults.reduce((sum, searchResults) => sum + searchResults.calories, 0)}</th>
                    <th>{searchResults.reduce((sum, searchResults) => sum + searchResults.proteins, 0)}</th>
                    <th>{searchResults.reduce((sum, searchResults) => sum + searchResults.carbs, 0)}</th>
                    <th>{searchResults.reduce((sum, searchResults) => sum + searchResults.fats, 0)}</th>
                    <th></th>
                </tr>
            </tfoot>
        </table>
    )
}

export default DailyNutritionUsage