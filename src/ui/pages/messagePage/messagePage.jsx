import React from 'react';
import './messagePage.css';
import './AppResponsive.css';

import MessageLeftSide from '../../components/message/leftSide/messageLeftSide';
import RightSideHeader from '../../components/message/rightSide/header/rightSideHeader'
import { RightSideMain } from '../../components/message/rightSide/messageRightSide';
import { RightSideFooter } from '../../components/message/rightSide/rightSideFooter/rightSideFooter';
import { NavSide } from '../../components/navSide/navSide';

const style = {
  "background":"rgb(239, 238, 240)",
  'display': 'flex',
  'align-items': 'center'
    
}
const hide = {
  "display": "none"
}
function MessagePage() {
  return (
    <div className="messageContainer">
      
      <div id='message_navBar'>
          <NavSide style={style} hide={hide}/>
      </div>
      <div id="message_leftSide">
       
        <MessageLeftSide />
      </div>
      <div id="message_mainSide">
        <RightSideHeader />
        <RightSideMain />
        <RightSideFooter />
      </div>
    </div>
  );
}

export default MessagePage;
