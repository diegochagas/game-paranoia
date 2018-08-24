import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage19(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>19</strong> Entrando na sala de informações, você descobre que ela está lotada de cidadãos infravermelhos. Você recebe uma senha de número 345, e suspira aliviado: muito menos gente do que há nas filas lá fora.</p>     
			        <Link className="btn-game" to="/game-paranoia/stages/08">Se quiser ficar com a senha e esperar sua vez, vá para 8.</Link>      
			        <Link className="btn-game" to="/game-paranoia/stages/29">Se quer voltar e pegar a fila da esquerda, vá para 29.</Link>
			        <Link className="btn-game" to="/game-paranoia/stages/32">Se quer a fila da direita, vá para 32.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}