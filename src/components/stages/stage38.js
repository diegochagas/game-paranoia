import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage38(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>38</strong> One thing your clone will never find out is that it triggered the detonator from a bomb. She blew you in in 712 pieces before you had time to think. Fool! Do not you know that in R & D, pretty much anything you touch explodes in your face?</p>
			        <p>It is a pity. You'll have to start all over again. Choose one of these numbers and start again with a new clone:</p>
			        <Link className="btn-game" to="/game-paranoia/stages/01">1, </Link>
			        <Link className="btn-game" to="/game-paranoia/stages/14">14, </Link>
			        <Link className="btn-game" to="/game-paranoia/stages/30">30, </Link>
			        <Link className="btn-game" to="/game-paranoia/stages/33">33, </Link>
			        {/* <Link className="btn-game" to="/game-paranoia/stages/128">128.</Link> */}
				</div>
			</section>
			<Footer/>
		</div>
	);
}