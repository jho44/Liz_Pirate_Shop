import React, {Component} from "react"
import {Link} from "react-router-dom"
import logo from "../logo.png"
import styled from "styled-components"
import {ButtonContainer} from "./Button"

// code for navigation bar at top of page
// only linking to Products page (by clicking 
// on logo or "Products" button) and Cart page
// (by clicking on Cart button on far right)

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/* using image marked for reuse found on Google */}
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand" style={{height: "4rem"}}/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus"/>
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`