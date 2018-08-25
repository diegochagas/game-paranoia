import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage20(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>20</strong> — What are you doing, SPLASH? - you ask.</p>
			        <p>— Nothing — he replies. — Well, JOCA, you are my friend and I think I can tell you. I discovered that someone sabotaged a robot and I'm trying to figure out which one it was. You know, if there's a problem, we'll be the culprits. But let's go back, for our beloved boss must be coming back.</p>
			        <p>You go back to the other room.</p>
			        <Link className="btn-game" to="/game-paranoia/stages/04">Go to 4.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}