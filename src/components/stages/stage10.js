import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage10(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>10</strong> Assim que você termina de falar, percebe sorrisos diabólicos nos rostos dos guardas. Suas armas brilham com luz laser, e no mesmo instante você é transformado em fumaça verde, da mesma cor de sua autorização.</p>     
			        <Link className="btn-game" to="/game-paranoia/stages/1">É o fim. Recomece com um novo clone. Vá para 1.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}