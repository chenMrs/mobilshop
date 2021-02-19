import React from 'react'
import {Row, Col} from 'react-bootstrap'
import products from '../product'
const Homescreen = () => {
  return (
    <>
      <h1>最新产品</h1>
      <Row>{products.map(product =>(
      <Col>
        <h3>{product.name}</h3>
      </Col>
      ))}
      </Row>
    </>
  )
}

export default Homescreen
