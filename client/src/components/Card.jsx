import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'
import Button from './Button'

function Card({item}) {
  return (
    <div  className="card">
      <Link to={`/product/${item.id}`}>
        <img src={item.category.image} alt="" loading='lazy' />
      <div className="product-inf">
        {item.title}
        <span>{item.price}$</span>
      </div>
      </Link>
      
      <Button>
        Add to basket
      </Button>
    </div>
  )
}

export default Card