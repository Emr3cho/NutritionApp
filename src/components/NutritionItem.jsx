import React from 'react'

const NutritionItem = ({ props }) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.calories}</td>
      <td>{props.proteins}</td>
      <td>{props.carbs}</td>
      <td>{props.fats}</td>
      <td>
        <button onClick={() => window.location.href='https://www.google.com'}>Delete</button>
        <button>View</button>
      </td>
    </tr>
  )
}

export default NutritionItem