import React from 'react';
import Header from '../header';
import Footer from '../footer';
import {Link} from 'react-router-dom';

export default function Stage02(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
		        <div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
		        </div>
				<div className="game-stage">
		        	<p><strong>2</strong> You enter the AXK bathroom and you can not find the robot there. A citizen is in the bathroom, and hands him a ticket. There is no time to read now, otherwise the robot may disappear. If you want to get the paper, mentally note that you did it. If you do not want to, just throw it away.</p>
			        <Link className="btn-game" to="/game-paranoia/stages/34">Go to 34</Link>
		    	</div>
		    </section>
	        <Footer/>
		</div>
	);
}