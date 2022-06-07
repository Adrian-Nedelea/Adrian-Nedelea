import React, {useState} from "react";
 import './Chat.css'
import { Button } from "react-bootstrap";
const Avatar = props => {
    const [hovered, setHovered]=useState(false)
    return (
        <div style={props.style}>
        <div className="AvatarHello" 
        style={{opacity : hovered ? "1": "0"}} >Lasă un review
        </div>

        <Button className="ChatWithMeButton" 
        onClick={() => props.onClick && props.onClick()}
        onMouseLeave={() =>setHovered(false)}
        onMouseEnter={()=> setHovered(true)} ></Button>
        </div >
    )
}

export default Avatar;