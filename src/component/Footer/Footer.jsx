import React from 'react'
import './Footer.css'
import { FaFacebookF, FaPhoneAlt } from 'react-icons/fa'
import { BsTwitter, BsYoutube } from 'react-icons/bs'
// import logo from '../Images/logo.png'
import logo from '../images/logo.png'
import { GrInstagram } from 'react-icons/gr'
import { RiWhatsappLine } from 'react-icons/ri'
import { CgMail } from 'react-icons/cg'
import { BiTimeFive } from 'react-icons/bi'

const Footer = () => {
    return (
        <>
            <div className="footer" id="footer">
                <div className="footerContainer">

                    <div className="logo">
                        <div className="logoImg">
                            <img src={logo} alt="logo" />
                        </div>
                        <h2 className="logoName">PHOENIXC<span className="logoNameColor">₹</span>YPTO</h2>
                    </div>

                    <div className="topFooter">
                        <div className="tf1">
                            <h4 className="title">Connect with us</h4>
                            <div className="fContactContainer">
                                <div className="fContact">
                                    <FaPhoneAlt color='black' size='20px' />
                                    <span className="fCon">+123 456 789</span>
                                </div>
                                <div className="fContact">
                                    <RiWhatsappLine color='black' size='20px' />
                                    <span className="fCon">+123 456 789</span>
                                </div>
                                <div className="fContact">
                                    <CgMail color='black' size='20px' />
                                    <span className="fCon">support@niveshartha.com</span>
                                </div>
                                <div className="fContact">
                                    <BiTimeFive color='black' size='20px' />
                                    <span className="fCon">mon to sat, 9:00AM to 6:00PM</span>
                                </div>
                            </div>
                            <div className="follow">
                                <h4 className="title">Follow Us</h4>
                                <div className="followImgContainer">
                                    <div className="followImg">
                                        <FaFacebookF color='white' size='20px' />
                                    </div>
                                    <div className="followImg">
                                        <BsTwitter color='white' size='20px' />
                                    </div>
                                    <div className="followImg">
                                        <BsYoutube color='white' size='20px' />
                                    </div>
                                    <div className="followImg">
                                        <GrInstagram color='white' size='20px' />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="tf2">
                            <h2 className="title">Niveshartha</h2>
                            <ul>
                                <li>About us</li>
                                <li>Career</li>
                                <li>Complaint</li>
                                <li>Known Fraud</li>
                                <li>From CEO</li>
                                <li>Contact</li>
                            </ul>
                        </div>

                        <div className="tf2">
                            <h2 className="title">Service</h2>
                            <ul>
                                <li>Navratna</li>
                                <li>Kosha</li>
                                <li>Panchtatva</li>
                                <li>Ritu</li>
                                <li>Trishul</li>

                            </ul>
                        </div>

                        <div className="tf2">
                            <h2 className="title">Terms</h2>
                            <ul>
                                <li>Disclaimer</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                                <li>Disclosure</li>
                                <li>FAQ</li>
                                <li>Refund Policy</li>
                            </ul>
                        </div>

                        <div className="tf2">
                            <h2 className="title">More</h2>
                            <ul>
                                <li>Disclaimer</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                                <li>Disclosure</li>
                                <li>FAQ</li>
                                <li>Refund Policy</li>
                            </ul>
                        </div>

                    </div>

                    <div className="footerBorder"></div>

                    <div className="middleFooter">
                        <div className="mfContainer">
                            <span className="desc">SEBI Registered Research Analyst Details: </span>
                            <span className="desc">Registered Name:</span>
                            <span className="desc">Types of registration: Non-Individual</span>
                            <span className="desc">Registration No.:</span>
                            <span className="desc">Validity:</span>
                            <span className="desc">View Registration Certificate</span>
                        </div>

                        <div className="mfContainer">
                            <span className="desc">Nearest SEBI office</span>
                            <span className="desc">Address:</span>
                            <span className="desc">Email:</span>

                        </div>

                        <div className="mfContainer">
                            <span className="title">Niveshartha Private Limited</span>
                            <span className="desc">CIN No:</span>
                            <span className="desc">Reg Address:</span>
                            <span className="desc">Telephone:</span>
                            <span className="desc">Principal Officer:</span>
                            <span className="desc">Email:</span>
                            <span className="desc">Telephone:</span>
                        </div>
                    </div>

                    <div className="footerBorder1"></div>

                    <div className="bottomFooter">
                        © PhoenixCrypto 2023 All Rights Reserved
                    </div>

                </div>
            </div>
        </>


    )
}

export default Footer
