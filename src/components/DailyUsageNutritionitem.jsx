import React from 'react'

const DailyUsageNutritionitem = ({ nutrition}) => {
  return (
    <tr>
      <td>{nutrition.name}</td>
      <td>{nutrition.calories}</td>
      <td>{nutrition.proteins}</td>
      <td>{nutrition.carbs}</td>
      <td>{nutrition.fats}</td>
      <td><button>Delete</button></td>
    </tr>
  )
}

export default DailyUsageNutritionitem