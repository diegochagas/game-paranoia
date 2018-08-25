import React from 'react';
import Header from '../header';
import Footer from '../footer';
import {Link} from 'react-router-dom';

export default function Stage05(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>5</strong> The scientist orders you to wait here. He goes to the testing room to get a new equipment, something that will not turn it into ashes, you expect. Fortunately you are not alone. SPLASH TIB 1, your best friend, also works here-and you can keep talking while ZECA does not arrive.</p>
			        <p>During the conversation, SPLASH asks permission to go to the bathroom. But you notice that he enters a room that has no bathroom. He also recalled that, before leaving, he was moving a strange black box on the table. Weird!</p>
			        <Link className="btn-game" to="/game-paranoia/stages/24">If you want to follow your friend, go to 24. </Link>
			        <Link className="btn-game" to="/game-paranoia/stages/39">If you wait, go to 39. </Link>
			        <Link className="btn-game" to="/game-paranoia/stages/22">If you want to examine the box, go to 22.</Link>
			    </div>
			</section>
			<Footer/>
		</div>
	);
}