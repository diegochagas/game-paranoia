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
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>38</strong> Uma coisa que este seu clone nunca vai descobrir é que acionou o detonador de uma bomba. Ela explodiu você em em 712 pedacinhos antes que tivesse tido tempo de pensar. Tolo! Você não sabe que, no P&D, praticamente qualquer coisa em que se toque explode na sua cara?</p>        
			        <p>E uma pena. Você vai ter que começar tudo de novo. Escolha um destes números e recomece com um novo clone:</p>
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