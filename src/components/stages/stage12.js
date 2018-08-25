import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header'
import Footer from '../footer';

export default function Stage12(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
				   	<p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>12</strong> You enter the hallway. Your colleague approaches you and whispers, "Hi, JOCA FITS-1. We heard that someone in the R & D, where you work, is putting something together. Please check and let us know as soon as possible.</p>
			        <p>After that he turns and walks away. You keep on your way.</p>
			        <Link className="btn-game" to="/game-paranoia/stages/35">Go to 35.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}