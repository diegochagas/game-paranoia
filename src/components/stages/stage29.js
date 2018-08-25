import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage29(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>29</strong> You pick up the line on the left and spend some delightful hours in it, counting your own strands of hair to pass the time. He lost count a few times, but he managed to count all 68,457 before it was his turn.</p>
			        <p>The clerk dressed in red (a level of security superior to yours, remember) looks at you and mumbles a sleepy "who?". You, very happy, because happiness is mandatory, asks for an ALF switch for potential breakers.</p>
			        <p>— Where's your OGF43B-5 warrant — he asks, almost asleep.</p>
			        <p>Of course. That black envelope has a warrant, you think. Open the envelope and find a green paper where it says "Authorization OGF43B-5". What do you do?</p>
			        <Link className="btn-game" to="/game-paranoia/stages/06">You say "See, I have this authorization," and hand over the green paper? Go to 6.</Link>
			        <Link className="btn-game" to="/game-paranoia/stages/32">You say "I do not have it, I'll get one in the right queue"? Go to 32.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}