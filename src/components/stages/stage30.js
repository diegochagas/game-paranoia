import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage30(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>30</strong> Você consegue uma autorização OGF43B-5, pega a chave ALF na outra fila e deixa o PLC, feliz porque cumpriu a função designada por seu superior e, portanto não será desintegrado por traição.</p>
			        <p>Você escuta um "psiu" vindo de um corredor mal iluminado. Quando olha, alguém que se esconde nas sombras e diz:</p>
			        <p>- Chuba-chuba prrrprrr hey!</p>
			        <p>É a senha da sua sociedade secreta! Sim, você pertence a um grupo que tenta derrubar a tirania do Computador. Claro que pertencer a uma sociedade secreta é traição. Traição é punida com a morte.</p>
			        <Link className="btn-game" to="/stages/12">Você entra no corredor escuro para falar com ele? Vá para 12.</Link>       
			        <Link className="btn-game" to="/stages/35">Você continua seguindo seu caminho sem olhar para trás? Vá para 35.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}