import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage23(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>23</strong> As soon as you finish talking, the clerk raises the hand holding the emerald paper. Emerald! The paper is also not available for the security level of it, which is red.</p>
			        <p>- Is not tha... - he shouts, but can not finish the sentence before being turned to smoke by the guards' laser rifles.</p>
			        <p>- Good work, citizen — the commander of Segni greets you. — By denouncing the traitor, your loyalty will be communicated to the Computer. Continue this, and you will receive a higher level of security. Be happy.</p>
			        <p>Smart maneuver. Little by little you do not turn up smoke instead of the clerk.</p>
			        <Link className="btn-game" to="/game-paranoia/stages/27">Go to 27.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}