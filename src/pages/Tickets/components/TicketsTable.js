import { Table } from 'react-bootstrap'
import TicketRow from './TicketRow'
import {useReducer, useEffect} from "react"
import {ticketsReducer, initialState} from "../../../reducers/tickets"
import {SET_TICKETS, ADD_QUANTITY} from "../../../actions/tickets"

const TicketsTable = ({tickets}) => {
  
  const [state, dispatch] = useReducer(ticketsReducer, initialState)

  const addTicketQuantity = (id) => {
    dispatch({type: ADD_QUANTITY, payload: {id}})
  }

  //dispatch => metodo que nos rellena el estado en base a un vector
  useEffect(() => {
    dispatch({ type: SET_TICKETS, payload : {tickets} })
  }, [tickets])

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
          {
            state.tickets?.length > 0 &&
              state.tickets.map((ticket) => (
                <TicketRow key={ticket.id} {...ticket} addTicketQuantity={addTicketQuantity}/>
          ))}          
      </tbody>
    </Table>
  )
}

export default TicketsTable