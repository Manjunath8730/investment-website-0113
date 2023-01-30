import React from 'react'
import { data } from './data'
import h1image from "../images/h1image.png"
import { AiOutlineRight } from "react-icons/ai"
import "./header.css"

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="headerContainer">
                    <div className="headerLeft">

                        <h2 className='hlTop'>We're made of innovative ideas & strategies to design portfolio</h2>

                        <span className='hlCenter'>We run simple rule keeping your money in mind to pick the strongest & let them go when the loose their strength</span>

                        <div className="hlBottom">
                            {data.map((item) => (
                                <div className="hlBottomCardContainer" id={item.id}>
                                    <div className="cardIcon">
                                        {item.icon} <AiOutlineRight size="20px" color="rgb(13, 59, 78)" />
                                    </div>
                                    <h4 className="cardTitle">{item.title}
                                    </h4>
                                </div>
                            ))}

                        </div>


                    </div>
                    <div className="headerRight">
                        <div className="headerImage">
                            <img src={h1image} alt="Investment" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header