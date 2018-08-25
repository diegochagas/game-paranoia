import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage16(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>16</strong> As soon as you enter the GHW, see the robot. He throws water on his face and then rubs it with his mop. As you try to get the soap out of the face, the robot goes off down the hall.</p>
			        <Link className="btn-game" to="/game-paranoia/stages/26">Go to 26.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}