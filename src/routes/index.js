//podria llamarse publicRoutes.js
//este es el entry point de todas las rutas de mi app
// BrowserRouter => es un contexto que nos provee info. Es un estado global.
import {BrowserRouter as Router, Route, useHistory, Redirect, Switch} from 'react-router-dom'
import Home from "../pages/Home/Home"
import Product from "../pages/Product/Product"
import Products from "../pages/Products/Products"
import NoExiste from "../pages/NoExiste"
import {useState} from "react"
import Navbar from '../components/layout/Navbar'

const Routes = () => {

  const [search, setSearch] = useState("")
  const history = useHistory()
  const handleSearch = (e) => {
    const palabraBuscada = e.target.ingresar.value
    console.log(palabraBuscada)
    e.preventDefault()
    //history.push(`/products/${palabraBuscada}`)
    e.target.ingresar.value = ""
  }

  return (
    <>
    <form onSubmit={handleSearch}>
    <input type="text" placeholder="ingrese su busqueda" name="ingresar"/>
    </form>
    <Router>
      <Navbar />
      <Switch> 
        <Route exact path="/" render={Home} />
        <Route exact path="/products"> 
          <Products  /> 
        </Route>
        <Route path="/products/:id" component={Product} />
        <Redirect to="/" />
        </Switch> 
      </Router>
    </>
  )
}

export default Routes