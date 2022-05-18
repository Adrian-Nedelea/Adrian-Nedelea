import React,{useState} from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import Avatar from '../Avatar'
import '../Chat.css'
import axios from 'axios';

const EmailForm= props => {
    const [email ,setEmail]= useState('');
    const [loading ,setLoading]=useState(false)

    function GetOrCreateUser(callback) {
        axios.put(
            'https://api.chatengine.io/users/',
            {username: email, email: email, secret: email},
            {headers: {"Private-Key": process.env.REACT_APP_CE_PRIVATE_KEY}}
        )
        .then(r => callback(r.data))
    }

    function GetOrCreateChat(callback) {
        axios.put(
            'https://api.chatengine.io/chats/',
            {usernames: [email, 'Adam La Morre'], is_direct_chat: true},
            {headers: {
                "Project-ID": process.env.REACT_APP_CE_PRIVATE_KEY,
                "User-Name": email,
                "User-Secret": email,
            }}
        )
        .then(r => callback(r.data))
    }

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        console.log('Sending email', email);
        
        GetOrCreateUser(
            user =>{
                props.setUser(user)
                GetOrCreateChat(
                    
                    chat => props.setChat(chat)
                )
            }
        )
        
    }
    return (
        <div className='EmailFormWindow' style={{height:'100%',opacity:'1'}}>
            <div style={{height:'0px'}}>
                <div className='Stripe'/>
                </div>
                <div className='LoadingDiv' 
                style={{zIndex : loading ? "10":"-1",
                        opacity: loading? "0.33":"0"}}/>
                
                <LoadingOutlined
                className="LoadingIcon" 
                style={{zIndex : loading ? "10":"-1",
                opacity: loading? "1":"0",
                fontSize:'82px',
                top:'calc(50% -41px)',
                left:'calc(50% -41px)'
                  }}
                />
                <div style={{position:'absolute',height:'100%',width:'100%',textAlign:'center' }}>
                    <Avatar 
                    style={{position:'relative',
                            left:'calc(50% +44px)',
                             top:'10%'}}
                    />
                    <div className='TopText'>
                        Bine ai venit <br/>
                        </div>

                    <form onSubmit={e => handleSubmit(e)}
                    style={{position:'relative',width:'100%', top:'19.75%'}}>
                        <input  className='EmailInput' onChange={e =>setEmail(e.target.value)}
                        placeholder="Email"></input>
                    </form> 

                    <div className='BottomText'>Email-ul tau <br/> pentru a adresa o intrebare</div>
                    </div>  
        </div>
    )
}

export default EmailForm;