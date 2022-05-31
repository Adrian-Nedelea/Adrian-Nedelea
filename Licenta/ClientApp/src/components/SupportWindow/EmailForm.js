import React,{useState,useEffect} from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import Avatar from '../Avatar'
import '../Chat.css'
import axios from 'axios';

const EmailForm= props => {
    const [email ,setEmail]= useState('');
    const [loading ,setLoading]=useState(false)

    function getOrCreateUser(callback){
        axios.put(
            'https://api.chatengine.io/users/',
                {
                    "username": email,
                    "secret": email,
                    "email":email,
                },
                {headers: { "Private-key":process.env.REACT_APP_CE_PRIVATE_KEY}}
        )
        .then(response=>callback(response.date)).catch(err => console.log(err));
        

    }
    function getOrCreateChat(callback){
        axios.put(
            'https://api.chatengine.io/chats/',
            {
                "usernames": ["Tzacalie", email],
                
                "is_direct_chat": true
            },
            {headers: { "Private-key":process.env.REACT_APP_CE_PRIVATE_KEY}}

        ).then(response=> callback(response.date)).catch(err => console.log(err));
    }
   
    function handleSubmit(event){
        event.preventDefault();
        setLoading(true)
        console.log('sending email' ,email)

        getOrCreateUser(
            user=>{
                getOrCreateChat(
                    chat => console.log('sucess', chat)
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

                    <form onSubmit={ e =>handleSubmit(e)}
                    style={{position:'relative',width:'100%', top:'19.75%'}}>
                        <input  className='EmailInput' value={email} onChange={e =>setEmail(e.target.value)}
                        placeholder="Email"></input>
                    </form> 

                    <div className='BottomText'>Email-ul tau <br/> pentru a adresa o intrebare</div>
                    </div>  
        </div>
    )
}

export default EmailForm;