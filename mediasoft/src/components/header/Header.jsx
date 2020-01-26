import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from "react-router-dom";

import pathname from '../../constants/pathname.js';

export default function Header(){
    return(
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand>MediaSoft ТЗ</Navbar.Brand>
            <Nav className="mr-auto">
                <Link className="nav-link" to={pathname.main}>Home</Link>
                <Link className="nav-link" to={pathname.list}>list</Link>
                <Link className="nav-link" to={pathname.deletedTask}>deletedTask</Link>
            </Nav>
        </Navbar>
    )
}