import { useContext } from "react"
import {AuthContext} from "../../contexts/Auth"

const Dashboard = () => {
  
  const {getUserInformation} = useContext(AuthContext)
  const {name} = getUserInformation()
  console.log(name)
  
  return <h3>Bienvenido: {name}</h3>  
}

export default Dashboard