import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage22(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>22</strong> You open the box and find inside it an object with a button. On the button it says: "Do not press".</p>
			        <Link className="btn-game" to="/game-paranoia/stages/38">If you want to push the button, go to 38.</Link>
			        <Link className="btn-game" to="/game-paranoia/stages/15">If you are fearful, you want to close the box and leave it as it was, go to 15.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}