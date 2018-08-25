import React from 'react';
import Header from '../header';
import Footer from '../footer';
import {Link} from 'react-router-dom';

export default function Stage06(){
	return(
		<div className="App-game">
			<Header></Header>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>6</strong> As soon as you deliver the emerald form, the expression on the clerk's face changes from drowsiness to fear and revolt. What happened? Well, you played an emerald role - and green is not for your Safety Level. I walked in well, you think.</p>
			        <p>— Traitor! shouts the clerk, pressing an alarm button. In seconds a battalion of truculent Homeland Security troops invade the room, aiming laser rifles toward him. What do you say to HomSec?</p>
			        <Link className="btn-game" to="/game-paranoia/stages/23">"There, a traitor! He has a form that is not for his Level of Security!" Go to 23.</Link>
			        <Link className="btn-game" to="/game-paranoia/stages/36">"It's not my fault! They gave it to me there in R & D!" Go to 36.</Link>
			        <Link className="btn-game" to="/game-paranoia/stages/10">"I confess my crimes! I had the emerald form!" Go to 10.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}