import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const NavHead = () => {
  return (
    <div>
      {/* <Navbar expand="lg">
  
    <Navbar.Brand href="#home" className="ms-5"><span  style={{ color: '#3A72B7',fontWeight:'700',fontSize:'25px' }}>SHUBURA</span> <span style={{ color: 'rgb(248, 121, 121)',fontWeight:'700',fontSize:'25px' }}>RANJAN</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" id="toggle" />
    <Navbar.Collapse >

      <Nav className="ms-auto">
        
        <Nav.Link href="#link">Link</Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
 
</Navbar> */}

<nav>
<input type="checkbox" name="" id="check" />
<label htmlFor="check" className="checkBtn">
<FontAwesomeIcon icon={faBars} />
</label>
    <label className="logo"><span  style={{ color: '#3A72B7',fontWeight:'700',fontSize:'25px' }}>SHUBURA</span> <span style={{ color: 'rgb(248, 121, 121)',fontWeight:'700',fontSize:'25px' }}>RANJAN </span> <p className="logo2"><small>Always Ahead</small></p></label>

    <ul className="lists">
        <li><a href="#">Home</a></li>
        <li><a href="#">Home</a></li>
    </ul>
</nav>
    </div>
  )
}

export default NavHead
