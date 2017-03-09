import React from 'react';
import Inbox from './inbox';
import Spam from './spam';
import {Link} from 'react-router';

export default function SideBar(props) {

console.log(props);
    return (
        <div>
            <strong>
                <Link to={'/inbox/'}> INBOX     
                </Link>
                 <Link to={'/spam/'}> SPAM      
                </Link>
            </strong>


        </div>
    );
};