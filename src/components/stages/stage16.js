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
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>16</strong> Assim que você entra no GHW, vê o robô. Ele joga água na sua cara e depois esfrega com o esfregão. Enquanto você tenta tirar o sabão da cara, o robô vai embora pelo corredor. </p>      
			        <Link className="btn-game" to="/stages/26">Vá para 26.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}