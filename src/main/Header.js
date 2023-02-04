
import Private from "../components/Private";
import logo from './logo.jpeg'
import {Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand, NavLink} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {Route, Routes} from "react-router";
import Offices from "../components/Offices";
import Business from "../components/Business";
import ATM from "../components/ATM";
import Currency from "../components/Currency";
import App from "../components/App";

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="light" variant="light">
                <Container>
                    <NavbarBrand href="/">
                        <img src={logo}
                             height='80'
                             width='300'
                             className='d-inline-block align-top'
                             alt='Logo'/>
                    </NavbarBrand>
                    <NavbarToggle area-controls='responsive-navbar-nav'/>
                    <NavbarCollapse id='responsive-navbar-nav'>
                        <Nav className='me-auto'>
                            <NavLink href='/private'><strong> Private </strong></NavLink>
                            <NavLink href='/business'><strong> Business </strong></NavLink>
                            <NavLink href='/offices'><strong> Offices </strong></NavLink>
                            <NavLink href='/atm'><strong> ATM </strong></NavLink>
                            <NavLink href='/currency'><strong> Currency exchange </strong></NavLink>
                            <NavLink href='/app'><strong> Mobile APP </strong></NavLink>
                        </Nav>

                        <Form inline='true'>
                            <div className="d-inline-flex p-2">
                                <FormControl
                                    inline='true'
                                    type="text"
                                    className='me-sm-2'/>
                                <Button variant='outline-info'><strong> Search </strong></Button>
                            </div>
                        </Form>
                    </NavbarCollapse>

                </Container>
            </Navbar>
            <Routes>
                <Route path='/private' element={<Private/>}/>
                <Route path='/business' element={<Business/>}/>

                <Route path='/offices' element={<Offices/>}/>
                <Route path='/atm' element={<ATM/>}/>
                <Route path='/currency' element={<Currency/>}/>
                <Route path='/app' element={<App/>}/>
            </Routes>
        </>
    )
}
export default Header;