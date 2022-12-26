//podria llamarse publicRoutes.js
//este es el entry point de todas las rutas de mi app
// BrowserRouter => es un contexto que nos provee info. Es un estado global.
import {BrowserRouter as Router, Route, useHistory, Redirect} from 'react-router-dom'
import Home from "../pages/Home/Home"
import Product from "../pages/Product/Product"
import Products from "../pages/Products/Products"
import NoExiste from "../pages/NoExiste"
import {useState} from "react"

const Routes = () => {

  const [search, setSearch] = useState("")
  const history = useHistory()
  const handleSearch = (e) => {
    const palabraBuscada = e.target.ingresar.value
    console.log(palabraBuscada)
    e.preventDefault()
    history.push(`/products/${palabraBuscada}`)
    e.target.value = ""
  }

  return (
    <>
    <form onSubmit={handleSearch}>
    <input type="text" placeholder="ingrese su busqueda" name="ingresar"/>
    </form>
    <Router>
      <Route exact path="/" render={Home} />
      <Route exact path="/products"> <Product search={search} /> </Route>
      <Route path="/products/:id" render={Products} />
      {/* <Route path="*" render={NoExiste} /> */}
      <Redirect to="/" />
    </Router>
    </>
  )
}

export default Routes