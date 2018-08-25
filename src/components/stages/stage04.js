import React from 'react';
import Header from '../header';
import Footer from '../footer';
import {Link} from 'react-router-dom';

export default function Stage04(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>      
		        </div>
				<div className="game-stage">
			        <p><strong>4</strong> The scientist who commands you soon returns. You can tell him about the suspicious attitude of SPLASH, but this would put your friend in big trouble. On the other hand, if a problem arises, this could free your face.</p>
			        <Link className="btn-game" to="/game-paranoia/stages/37">If you want to count, go to 37</Link>
			        <Link className="btn-game" to="/game-paranoia/stages/11">If you think it's best to be quiet, go to 11.</Link>
			    </div>
	    	</section>
	        <Footer/>
		</div>
	);
}