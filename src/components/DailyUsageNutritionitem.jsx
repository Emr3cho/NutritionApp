import React from 'react'

const DailyUsageNutritionitem = ({ nutrition, setNuts}) => {
    const handleClick = (nutrition) => {
        let idToRemove = nutrition.id;
        setNuts(prev => prev.filter(item => item.id !== idToRemove));
    };
  return (
    <tr>
      <td>{nutrition.name}</td>
      <td>{nutrition.calories}</td>
      <td>{nutrition.proteins}</td>
      <td>{nutrition.carbs}</td>
      <td>{nutrition.fats}</td>
      <td><button onClick={() => handleClick(nutrition)}>Delete</button></td>
    </tr>
  )
}

export default DailyUsageNutritionitem