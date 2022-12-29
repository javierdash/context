// setea una autenticación y el logout del usuario

export const initialState = {
  isLoggedIn : false,
  jwt: null, // se envia en cada request HTTP (en la cabecera) + storage
}

// {payload : {jwt : ejfjirttigjldghrtl}}
export const authReducer = (state, action) => {
  switch(action.type) {
    case SET_AUTH: {
      const {jwt} = action.payload;
        return {
          isLoggedIn : true,
          jwt,
        }
    }
    case LOGOUT: 
      return initialState
    default:
      return state
  }
}