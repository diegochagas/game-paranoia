import React from 'react';
import Header from '../header';
import Footer from '../footer';
import {Link} from 'react-router-dom';

export default function Stage08(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>8</strong> You pick up your password and calmly wait for your turn to be answered. Luckily it does not take long: in just an hour it's your turn.</p>
			        <p>- I'd like to know what queue I should take to get an ALF key - you ask the clerk.</p>
			        <p>- What is your Safety Level, citizen? "Infrared," you reply.</p>
			        <p>- Sorry, this information is not available for your Security Level.</p>
			        <p>So much happy, you leave the room. </p>
			        <Link className="btn-game" to="/game-paranoia/stages/29">If you want to take the left queue, go to 29. </Link>
			        <Link className="btn-game" to="/game-paranoia/stages/32">If you want to pick up the right queue, go to 32.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}