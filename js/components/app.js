import React from 'react';
import SideBar from './sidebar';
import EMAILDATA from '../inboxDataObj';

export default function App(props) {
    return (
        <div className="app">
        <SideBar /> 
        {props.children}   
         
        </div>
    );
};