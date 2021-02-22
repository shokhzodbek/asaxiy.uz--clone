import React,{useEffect} from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
 import './styles.css'
import 'react-chat-widget/lib/styles.css';
 
import logo from '../assets/log.png';
 
function Chat() {
  useEffect(() => {
    addResponseMessage('Здравствуйте! У вас возникли вопросы? Мы с удовольствием ответим!');
    

  }, []);
 
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };
 

    return (
      <div className={"chatbot"}>
        <Widget
          className={"chatbot"}
          handleNewUserMessage={handleNewUserMessage}
          profileAvatar={logo}
          title="Asaxiy.uz "
          subtitle="Asaxiy online yordamchi"
        />
      </div>
    );
}
 
export default Chat;