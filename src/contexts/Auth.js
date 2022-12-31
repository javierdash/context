import {createContext, useContext, useReducer} from "react"
import { SET_AUTH, LOGOUT } from "../actions/auth"
import { authReducer, initialState } from "../reducers/auth"
import jwt_decode from "jwt-decode"

//definiendo el contexto
export const AuthContext = createContext()
//Provider => para que el context se pueda usar en todos los componentes
const {Provider} = AuthContext;

export const AuthProvider = ({children}) => {

  const [state, dispatch] = useReducer(authReducer, initialState)

  const logout = () => {
    dispatch({ type: LOGOUT })
  }

  const getUserInformation = () => {
    { name: jwt_decode(state.jwt.name)}
  }

  const login = ({username, password}) => {
    //PETICION HHTTP axios.post el server responde un token
    if(username === "admin" && password === "12345") {
      const {jwt} = {
        jwt: "ejfjirttigjldghrtl"
      }
      setAuth({ jwt })
      return jwt
    } else {
    return null;
    }
  }

  const setAuth = ({ jwt }) => {
    dispatch({ type: SET_AUTH, payload: { jwt } })
  }

  return (
    <Provider value={{ setAuth, logout, login, getUserInformation }}>
      {children}
    </Provider>
  )
}