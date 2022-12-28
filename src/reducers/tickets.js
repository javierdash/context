import {SET_TICKETS, ADD_QUANTITY} from "../actions/tickets"

//inicio con un vector vacío
export const initialState = {
  tickets : [],
  total : 0,
  resume : {},  
}

// action => es un objeto que propaga info con un payload
//action : {type: {SET_TICKETS, ADD_QUANTITY, SUBSTRACT_QUANTITY}, payload : {}}
// state:  estado actual del componente

const getTotal = (tickets) =>
    tickets
      .map((ticket) => +ticket.precio * +ticket.cantidad)
      .reduce((prev,current) => prev + current, 0)

console.log(getTotal)

export const ticketsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_TICKETS: {
      return {
        tickets : action.payload.tickets,
        total : getTotal(state.tickets),
      }
    }
    case ADD_QUANTITY: {
      const tickets = state.tickets.map((ticket) => 
        ticket.id === action.payload.id 
        ? {...ticket, cantidad : ticket.cantidad + 1 }
        : ticket
      )
      return {
        tickets,
        total: getTotal(tickets)
      }
    }
    default : 
      return state;
  }
}