import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage17(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>17</strong> You and your friend are taken to a gigantic room, dominated by an immense TV monitor and hundreds of cameras throughout. A monstrous eye appears on the screen: it is the Computer.</p>
			        <p>No more or less, a cannon emerges from an opening in the ceiling and fires at SPLASH, turning it into a puddle of steaming protoplasm.</p>
			        <p>- IT WAS SUSPICIOUS FOR WALKING WITH THE UNCHAPPED CHAINS, "says the Computer. - THIS EVENT ONLY CONFIRMED YOUR TRADOR CONDITION. WHAT IS YOUR SAFETY LEVEL, CITIZEN?</p>
			        <p>- Infrared, magnanimous Computer — you respond by sweating the liters.</p>
			        <p>- ARE YOU HAPPY, CITIZEN?</p>
			        <p>- Very, generous Computer.</p>
			        <p>- LOOK HIM</p>
			        <Link className="btn-game" to="/game-paranoia/stages/03">Do you have the paper you received in the AXK bathroom? Go to 3.</Link>
			        <Link className="btn-game" to="/game-paranoia/stages/40">If it does not, go to 40.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}