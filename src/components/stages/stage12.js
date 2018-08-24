import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header'
import Footer from '../footer';

export default function Stage12(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
				   	<p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>12</strong> Você entra no corredor. Seu colega se aproxima de você e sussurra: — Olá, JOCA CAB-1. Soubemos que alguém no P&D, onde você trabalha, está armando alguma coisa. Verifique e nos informe assim que possível.</p>     
			        <p>Depois disso ele se vira e vai embora. Você continua em seu caminho.</p>
			        <Link className="btn-game" to="/stages/35">Vá para 35.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}