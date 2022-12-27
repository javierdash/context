import { lazy, Suspense } from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
//import Home from "../pages/Home/Home"
//import Tickets from "../pages/Tickets/Tickets"

//carga a demanda
const Home = lazy(() => import("../pages/Home/Home"))
const Tickets = lazy(() => import("../pages/Tickets/Tickets"))

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={() => <h3>Cargando...</h3>}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tickets" component={Tickets} />
        <Redirect to="/" />
      </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes