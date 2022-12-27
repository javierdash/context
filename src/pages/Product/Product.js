import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({match}) => {
  
  console.log(match.params.id)

  return (
    <>
      <h1>Productos</h1>
      <h2>Se solicita info del producto: {match.params.id}</h2>
    </>
  )
}

export default Product