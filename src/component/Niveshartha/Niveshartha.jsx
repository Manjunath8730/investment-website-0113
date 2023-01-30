import React from 'react'
import { Niveshartha1, Niveshartha2 } from '../Unique/data'
import "./niveshatha.css"
import e1 from "../images/e1.png"
import e2 from "../images/e2.png"
import { IoIosArrowDroprightCircle } from "react-icons/io"

const Niveshartha = () => {
    return (
        <>
            <div className="niveshartha">
                <div className="niveshContainer">
                    <div className="niveshCard">
                        <div className="niveshLeft">
                            <h2 className="title">What should you expect from Niveshartha</h2>
                            {Niveshartha1.map((item) => (
                                <div className="pointContainer" id={item.id}>
                                    <span className="point">
                                        {item.desc}
                                    </span>
                                </div>
                            ))}

                        </div>
                        <div className="niveshRight">
                            <div className="ightImage">
                                <img src={e1} alt="nivesh" />
                            </div>
                        </div>

                    </div>
                    <div className="niveshCard">
                        <div className="niveshLeft1">
                            <img src={e2} alt="nivesh" />
                        </div>
                        <div className="niveshRight1">
                            <h2 className="title">What should you expect from Niveshartha</h2>
                            {Niveshartha2.map((item) => (
                                <div className="pointContainer" id={item.id}>
                                    <IoIosArrowDroprightCircle color='green' /> <span className="point">
                                        {item.desc}
                                    </span>
                                </div>
                            ))}
                            <div className="niveshBtn">Get Started</div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Niveshartha