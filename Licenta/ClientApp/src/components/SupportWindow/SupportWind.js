import React, { useState } from 'react'
import '../Chat.css'
import EmailForm  from './EmailForm'
const SupportWindow= props => {
    const [user,setUser]=useState(null);
    const [chat, setChat]=useState (null);
    return (
        <div className='SupportWindow' 
        style={{ opacity: props.visible ? '1' : '0' }}>
            <EmailForm
            setUser={user => setUser(user)}
            setChat={chat =>setChat(chat)}
            visible={user === null || chat ===null }/>
        </div>
    )
}

export default SupportWindow;