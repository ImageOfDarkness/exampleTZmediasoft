import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import pathname from '../../constants/pathname.js';

export default function Header(){
    return(
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand>MediaSoft ТЗ</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href={pathname.main}>Home</Nav.Link>
                <Nav.Link href={pathname.list}>list</Nav.Link>
                <Nav.Link href={pathname.deletedTask}>deletedTask</Nav.Link>
            </Nav>
        </Navbar>
    )
}