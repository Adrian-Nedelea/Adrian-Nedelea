import React, {useState,useEffect} from 'react'
import {StreamChat} from 'stream-chat'
import {  Chat, Channel,Window, ChannelHeader, MessageList, MessageInput, LoadingIndicator,Thread} from 'stream-chat-react' 
import 'stream-chat-react/dist/css/index.css'

const apiKey= process.env.REACT_APP_STREAM_API_KEY

const user= {
    id: "adrian",
    name:"Adrian",
  
}
function Chat() {
    const [ client, setClient] =useState(null)
    const [channel, setChannel]=useState(null)

    useEffect(() =>
    {
        async function init () {
            const chatClient= StreamChat.getInstance(apiKey)

            await chatClient.connectUser(user , chatClient.devToken(user.id))

            const channel =chatClient.channel('messaging','react-talk', {
                name:'Talk about React',
                members:[user.id]
            })
            await channel.watch()
            setChannel(channel)
            setClient(chatClient)
        }
        init ()
        if(client) return () => client.disconnectUser()
    }, [])
    if(!channel || !client) return <LoadingIndicator/>
  return (
   <Chat  client= {client} theme="messaging light">
       <Channel channel={channel}>
           <Window>
           <ChannelHeader/>
            <MessageList/>
            <MessageInput/>
            </Window>
            <Thread/>
           </Channel>
       </Chat>
  )
}

export default Chat