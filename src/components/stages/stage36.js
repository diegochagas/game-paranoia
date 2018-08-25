import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage36(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>36</strong> "Let's check this out," says one who seems to be an officer of Segnt, which has emerald security level. He grabs the paper and drags you to the R & D by the ear. There, ask the scientist if he actually handed that paper.</p>
			        <p>— I do not know what you're talking about — your boss answers the guard. — Actually, I've always found this guy a little strange.</p>
			        <p>Under suspicion of being a traitor, you are "gently" taken to the reprogramming room, where you suffer a bit of torture and a complete brainwashing. Be happy.</p>
			        <Link className="btn-game" to="/game-paranoia/stages/01">Restart with a new clone. Go to 1.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}