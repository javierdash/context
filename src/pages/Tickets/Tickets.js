import {Link} from 'react-router-dom'
import TicketsTable from './components/TicketsTable'

const tickets = [
  {
    id: 1,
    descripcion: "descripcion del ticket",
    precio: 700,
    cantidad: 0,
  },
  {
    id: 2,
    descripcion: "descripcion del ticket 2",
    precio: 800,
    cantidad: 0,
  },

]

const Tickets = () => {
  return (
    <>
    <h2>Tickets</h2>
    <TicketsTable tickets={tickets}/>
    </>
  )
}

export default Tickets