import React from 'react'
import { Button } from 'react-bootstrap'

const TicketRow = ({id, descripcion, precio, cantidad, addTicketQuantity, substractTicketQuantity}) => {
  
  return (
    <tr>
      <td>{descripcion}</td>
      <td className="text-center">
        <Button className="mr-3" onClick={substractTicketQuantity}> - </Button>
        <span>{cantidad}</span>
        <Button className="ml-3" onClick={() => addTicketQuantity(id)}> + </Button>
      </td>
      <td className="text-center">${precio}</td>
    </tr>
  )
}

export default TicketRow