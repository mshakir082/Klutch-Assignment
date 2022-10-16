import React from 'react'
import './navbar.css'
const Dashbord = ({value}) => {

  return (
 
  <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
      {value.map((el)=>(
      
      <tr key={el.id}>
        <td>{el.season}</td>
        <td>{el.city}</td>
        <td>{el.date}</td>
        <td>{el.team1}</td>
        <td>{el.team2}</td>
        <td>{el.toss_winner}</td>
        <td>{el.toss_decision}</td>
        <td>{el.result}</td>
        </tr>
        ))}
        </tbody>
    </table>
  
  )
}

export default Dashbord