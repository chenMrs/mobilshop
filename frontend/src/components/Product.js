import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import Rating from './Rating'

const Product = ({product}) => {
  return (
    <Card className="my-3 py-3 rounded">
      <Link to={`/products/${product.id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>
      <Card.Body>
      <Link to={`/products/${product.id}`}>
        <Card.Title>{product.name}</Card.Title>
      </Link>
      <Card.Text>
        <Rating value={product.rating} text={`${product.numReviews}条评论`} color="#f8e825"/>
      </Card.Text>
      <Card.Text as='h3'>￥{product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product