import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage19(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>19</strong> Entering the information room, you find that it is full of infrared citizens. You get a password number 345, and you sigh with relief: much less people than there are in the queues outside.</p>
			        <Link className="btn-game" to="/game-paranoia/stages/08">If you want to keep the password and wait your turn, go to 8.</Link>
			        <Link className="btn-game" to="/game-paranoia/stages/29">If you want to go back and get the queue on the left, go to 29.</Link>
			        <Link className="btn-game" to="/game-paranoia/stages/32">If you want the right row, go to 32.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}