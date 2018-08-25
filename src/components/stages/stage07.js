import React from 'react';
import Header from '../header';
import Footer from '../footer';
import {Link} from 'react-router-dom';

export default function Stage07(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>7</strong> "Oh, no problem," says the red-haired citizen. "Do you think I'm going to tell you about it?</p>
			        <p>You distrust, but you can not disobey a top-level citizen. When he enters the red hall and goes to the robot, he hears the red citizen's sadistic laughter as he points a laser pistol:</p>
			        <p>- Traitor! Traitor! The Computer will reward me! - and squeeze the trigger, reducing you to the pure of atoms.</p>
			        <Link className="btn-game" to="/game-paranoia/stages/01">Uhh... go to 1.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}