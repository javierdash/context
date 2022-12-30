import {createContext, useContext, useReducer} from "react"
import { SET_AUTH, LOGOUT } from "../actions/auth"
import { authReducer, initialState } from "../reducers/auth"

//definiendo el contexto
export const AuthContext = createContext()
//Provider => para que el context se pueda usar en todos los componentes
const {Provider} = AuthContext;

export const AuthProvider = ({children}) => {

  const [state, dispatch] = useReducer(authReducer, initialState)

  const logout = () => {
    dispatch({ type: LOGOUT })
  }

  const login = ({username, password}) => {
    //PETICION HHTTP axios.post el server responde un token
    const {jwt} = {
      ok: true,
      jwt: "ejfjirttigjldghrtl"
    }
    setAuth({ jwt })
  }

  const setAuth = ({ jwt }) => {
    dispatch({ type: SET_AUTH, payload: { jwt } })
  }

  return (
    <Provider value={{ state, setAuth, logout, login }}>
      {children}
    </Provider>
  )
}