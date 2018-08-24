import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage20(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>20</strong> — Que está fazendo, CHUÁ? — você pergunta.</p>     
			        <p>— Nada — responde ele. — Bem, JOCA, você é meu amigo e acho que posso lhe contar. Descobri que alguém sabotou Um robô e estou tentando descobrir qual foi. Sabe como é, se surgir algum problema, os culpados seremos nós. Mas vamos voltar, pois nosso amado chefe deve estar voltando.</p>     
			        <p>Vocês voltam para a outra sala.</p>      
			        <Link className="btn-game" to="/game-paranoia/stages/04">Vá para 4.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}