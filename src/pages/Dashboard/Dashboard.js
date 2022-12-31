import { useContext } from "react"
import {AuthContext} from "../../contexts/Auth"

const Dashboard = () => {
  
  const [getUserInformation] = useContext(AuthContext)
  return (
    <>
    <div>Dashboard</div>
    <span>{getUserInformation}</span>
    </>
  )
}

export default Dashboard