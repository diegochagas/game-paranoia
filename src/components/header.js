import React from 'react';
import backgroundHeader from '../images/image-header.jpg';

export default function Header(){
	return(
		<header className="App-header">
          <img className="background-header" src={backgroundHeader} alt="Drawing of the player being watched by the computer and the other characters of the Alpha Complex"/>
          <div className="titulos">
            <h1 className="App-title">A day in the Alpha Complex</h1>
            <h2>A solo adventure game in the world of Paranoia</h2>
          </div>
        </header>
	);
}