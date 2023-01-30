import React from 'react'
import logo from "../images/logo.png"
import { AiFillCaretDown } from "react-icons/ai"
import { BsFillTelephoneForwardFill } from "react-icons/bs"
import { MdLogin } from "react-icons/md"
import "./navbar.css"

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navContainer">
                    <div className="navLeft">
                        <div className="logoImage">
                            <img src={logo} alt="logo image" />
                        </div>
                        <h1 className="logoTitle">
                            PHOENIXC<span>₹</span>YPTO
                        </h1>

                    </div>
                    <div className="navCenter">
                        <ul>
                            <li>Artha</li>
                            <li>Nivesh <AiFillCaretDown /></li>
                            <li>Service <AiFillCaretDown /> </li>
                            <li>Analyse</li>
                            <li>Learn <AiFillCaretDown /> </li>
                        </ul>
                    </div>
                    <div className="navRight">
                        <div className="navContact">
                            <BsFillTelephoneForwardFill color="rgb(61, 123, 147)" /> 1980 087 560
                        </div>
                        <div className="navContact">
                            <MdLogin color="rgb(61, 123, 147)" /> Login
                        </div>
                        <div className="navBtn">
                            Get Started
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar