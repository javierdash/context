import { Table } from 'react-bootstrap'
import TicketRow from './TicketRow'

const TicketsTable = ({tickets}) => {
  
  console.log(tickets[0])
  return (
    <Table>
      <thead>
        <tr>
          <th className="text-center">Tickets</th>
          <th className="text-center">Cantidad</th>
          <th className="text-center">Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {tickets.map(({id, descripcion, precio, cantidad}) => {
            <TicketRow id={id} descripcion={descripcion} precio={precio} cantidad={cantidad}/>
          })}          
        </tr>
      </tbody>
    </Table>
  )
}

export default TicketsTable