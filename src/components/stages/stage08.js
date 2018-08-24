import React from 'react';
import Header from '../header';
import Footer from '../footer';
import {Link} from 'react-router-dom';

export default function Stage08(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>8</strong>Você pega a sua senha e espera calmamente a sua vez de ser atendido. Felizmente não leva muito tempo: em apenas uma hora chega a sua vez.</p>
			        <p>- Eu gostaria de saber qual fila devo tomar para pegar um chave ALF - você pergunta ao balconista.</p>
			        <p>- Qual o seu Nível de Segurança, cidadão? - Infravermelho - você responde.</p>
			        <p>- Desculpe, mas infelizmente esta informação não está disponível para o seu Nível de Segurança.</p>
			        <p>Feliz da vida, você abandona a sala. </p>
			        <Link className="btn-game" to="/stages/29">Se quiser pegar a fila da esquerda, vá para 29. </Link>
			        <Link className="btn-game" to="/stages/32">Se quer pegar a fila da direita, vá para 32.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}