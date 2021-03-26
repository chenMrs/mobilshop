import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar,Nav,Container} from 'react-bootstrap'
export const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
          <Navbar.Brand >手机商城</Navbar.Brand>
          </LinkContainer>
         
          <Navbar.Collapse >
            <Nav className='ml-auto'>
              <LinkContainer to="/cart">
              <Nav.Link >
                <i className='fas fa-shopping-cart'></i>
                  购物车</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
              <Nav.Link >
              <i className='fas fa-user'></i>
              登录</Nav.Link>
              </LinkContainer>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     </header>
  )
}
