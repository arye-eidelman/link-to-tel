import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'


class Header extends Component {
  state = {}

  render() {
    return (
      <Navbar>
        <NavbarBrand>Link To Tel</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink tag={Link} to="/tel/new">Phone link generator</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/email/new">Email link generator</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default Header
