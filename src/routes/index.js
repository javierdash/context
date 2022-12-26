//podria llamarse publicRoutes.js
//este es el entry point de todas las rutas de mi app
// BrowserRouter => es un contexto que nos provee info. Es un estado global.
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from "../pages/Home/Home"
import Product from "../pages/Product/Product"
import Products from "../pages/Products/Products"

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" render={Home} />
      <Route path="/products" render={Product} />
      <Route path="/products/1" render={Products} />
    </Router>
  )
}

export default Routes