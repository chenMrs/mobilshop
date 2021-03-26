import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Row,Col,Image,ListGroup,Card,Button, ListGroupItem} from "react-bootstrap"
import products from "../product"
import Rating from '../components/Rating'
const Productscreen = ({match}) => {
    const [product,setProduct]  = useState({})
    useEffect(() => {
      const fetchProduct = async () =>{
        const {data}=await axios.get(`/api/products/${match.params.id}`)
        setProduct(data)
      }
      fetchProduct();
   }, [match])
  return (
    <div>
      <>
        <Link className='btn btn-dark my-3' to='/'>返回主页</Link>
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid/>
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroupItem><h3>{product.name}</h3></ListGroupItem>
              <ListGroupItem><Rating value={product.rating} text={`${product.numReviews}条评价`}/></ListGroupItem>
              <ListGroupItem><h3>价格：￥{product.price}</h3></ListGroupItem>
              <ListGroupItem><h3>描述：{product.description}</h3></ListGroupItem>
            </ListGroup>
            </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroupItem>
                  <Row>
                    <Col>价格：</Col>
                    <Col><strong>￥{product.price}</strong></Col>
                  </Row>
                  <Row>
                    <Col>库存：</Col>
                    <Col>{product.countInStock>0?'有货':'没货'}</Col>
                  </Row>
                  
                </ListGroupItem>
                <ListGroupItem>
                  <Button className="btn-block" type='button' disabled={product.countInStock===0}>添加到购物车</Button>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </>
    </div>
  )
}

export default Productscreen
