import React from 'react';
import EMAILDATA from '../inboxDataObj';

export default function Spam(props) {
	console.log(EMAILDATA.inbox);



    return (
        <div className="Spam">
           <div className="Spam"> 
				<h1> {EMAILDATA.spam[0].title} </h1>
            	<h2> {EMAILDATA.spam[0].content} </h2>
            	<p> {EMAILDATA.spam[0].from} </p>
            	<p> {EMAILDATA.spam[0].to} </p>
           </div>	
            

           	<div> 
				<h1> {EMAILDATA.spam[1].title} </h1>
            	<h2> {EMAILDATA.spam[1].content} </h2>
            	<p> {EMAILDATA.spam[1].from} </p>
            	<p> {EMAILDATA.spam[1].to} </p>
           	</div>	


        </div>
    );
};