import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage21(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>21</strong> You'd better not take a chance. You put your hand in the trash — only to find, in the worst way, that the lid closes as soon as something is put in the can. Your hand gets stuck and the robot starts walking again, dragging you down the aisles. The good news is that you come out of the red aisle; and the bad news is they enter a blue corridor. Calm, maybe not all is lost! Maybe the robot goes back into the red hallway before you get sprayed.</p>
			        <p>Suddenly, the robot enters an emerald room where there are about thirty people dressed in blue. There is a banner that reads: "Annual Meeting of the Marksmen: Blue Security Level".</p>
			        <p>Are you in trouble. But, seconds later, all your troubles end, as you have been reduced to a melequent folder by the weapons of the Sniper Agents. Better start over with another clone.</p>
			        {/*<Link className="btn-game" to="/game-paranoia/stages/53">Go to 53.</Link>*/}
			        <Link className="btn-game" to="/game-paranoia/stages/01">Go to 1.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}