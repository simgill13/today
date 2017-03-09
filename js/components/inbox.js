import React from 'react';
import EMAILDATA from '../inboxDataObj';

export default function Inbox(props) {
	console.log(EMAILDATA.inbox);



    return (
        <div className="inbox">
           <div className="inboxEmail"> 
				<h1> {EMAILDATA.inbox[0].title} </h1>
            	<h2> {EMAILDATA.inbox[0].content} </h2>
            	<p> {EMAILDATA.inbox[0].from} </p>
            	<p> {EMAILDATA.inbox[0].to} </p>
           </div>	
            

           	<div> 
				<h1> {EMAILDATA.inbox[1].title} </h1>
            	<h2> {EMAILDATA.inbox[1].content} </h2>
            	<p> {EMAILDATA.inbox[1].from} </p>
            	<p> {EMAILDATA.inbox[1].to} </p>
           	</div>	


        </div>
    );
};