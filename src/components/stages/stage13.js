import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage13(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>13</strong> Você olha para os lados e não vê ninguém. Procura câmeras e também não encontra nenhuma. É, talvez não aconteça nada. Com cuidado você chega perto do robô, e ele parece não ligar para sua presença. Na cabeça do robô você pode ver um botão.</p>      
			        <Link className="btn-game" to="/stages/09">Você aperta o botão? Vá para 9.</Link>
			        <Link className="btn-game" to="/stages/21">Enfia a mão no lixo e pega a chave? Vá para 21.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}