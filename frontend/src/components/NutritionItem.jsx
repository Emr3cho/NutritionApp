import React from 'react'

const NutritionItem = ({ nutrition, onClick }) => {
  return (
    <tr onClick={onClick}>
      <td>{nutrition.name}</td>
      <td>{nutrition.calories}</td>
      <td>{nutrition.proteins}</td>
      <td>{nutrition.carbs}</td>
      <td>{nutrition.fats}</td>
    </tr>
  )
}

export default NutritionItem