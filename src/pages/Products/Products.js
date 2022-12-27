import { Link } from 'react-router-dom'

const Products = (props) => {

  console.log(props)

  return (
    <div>
      <h1>products</h1>
      <Link to="/products/1">Producto 1</Link>
      <Link to="/products/2">Producto 2</Link>
    </div>
  )
}

export default Products