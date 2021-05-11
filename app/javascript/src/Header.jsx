import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap'
import { Link } from 'react-router-dom'



class Header extends Component {
  state = {}

  render() {
    return (
      <Navbar className="px-0">
        <NavbarBrand>Link To Tel</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink tag={Link} to="/tel/new">Phone link generator</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/email/new" className="pr-0">Email link generator</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default Header
