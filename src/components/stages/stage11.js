import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage11(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>11</strong> The scientist starts strapping you on a device full of blades, a torture machine that should be tested (and guess who the guinea pig is), when a robot invades the room and begins to break everything. Some Homeland Security guards can blow up the crazy robot - and then they are eliminated, because destroying Computer ownership is treason.</p>
			        <p>- Very well, "growls the scientist." You were here alone before I left. It is very likely that one of you has sabotaged the robot. I will have to take them to the Computer for this to be resolved.</p>
			        <Link className="btn-game" to="/game-paranoia/stages/17">Go to 17.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}