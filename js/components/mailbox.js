import React from 'react';
import EMAILDATA from '../inboxDataObj';

export default function Mailbox(props) {
  const mailboxName = props.params.mailboxName;
  const messageIds = Object.keys(EMAILDATA[mailboxName]);
  const messageList = messageIds.map(id => {
    return {  id: id, title:  };
  });

    return (
        <div className="mailbox">
          <ul>
            <li><Link to="/mailboxName/message.id">message.title</Link></li>
          </ul>
           <div > 
				      <h1> {EMAILDATA[mailboxName][0].title} </h1>
            	<h2> {EMAILDATA[mailboxName][0].content} </h2>
            	<p> {EMAILDATA[mailboxName][0].from} </p>
            	<p> {EMAILDATA[mailboxName][0].to} </p>
           </div>	
            

           	<div> 
				<h1> {EMAILDATA[mailboxName][1].title} </h1>
            	<h2> {EMAILDATA[mailboxName][1].content} </h2>
            	<p> {EMAILDATA[mailboxName][1].from} </p>
            	<p> {EMAILDATA[mailboxName][1].to} </p>
           	</div>	


        </div>
    );
};