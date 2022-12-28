import React from 'react'

const TicketRow = (id, descripcion, precio, cantidad, addTicketQuantity, substractTicketQuantity) => {
  return (
    <tr>
      <td>{descripcion}</td>
      <td className="text-center">
        <button className="btn"> - </button>
        <span>{cantidad}</span>
        <button className="btn"> + </button>
      </td>
      <td className="text-center">${precio}</td>

    </tr>
  )
}

export default TicketRow