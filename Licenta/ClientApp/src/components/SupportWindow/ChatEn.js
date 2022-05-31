import React from 'react';
import { ChatEngine } from 'react-chat-engine';

function ChatEn() {
    console.log(process.env.REACT_APP_CE_PROJECT_ID);
	return (
		<ChatEngine
            height="100vh"
			projectID={process.env.REACT_APP_CE_PROJECT_ID}
			userName='Doctorul Tzacalie'
			userSecret='pass1234'
		/>

        
	);
}

export default ChatEn;