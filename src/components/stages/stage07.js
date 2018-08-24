import React from 'react';
import Header from '../header';
import Footer from '../footer';
import {Link} from 'react-router-dom';

export default function Stage07(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>7</strong> "Oh, não tem problema - diz o cidadão vermelho - Você acha que eu iria dedurar você? Fique tranqüilo, pode entrar no corredor vermelho. Ninguém vai ficar sabendo".</p>     
			        <p>Você desconfia, mas não pode desobedecer a um cidadão de nível superior. Quando entra no corredor vermelho e vai até o robô, ouve a gargalhada sádica do cidadão vermelho enquanto ele aponta uma pistola laser:</p>
			        <p>- Traidor! Traidor! O Computador vai me recompensar! - e aperta o gatilho, reduzindo você a purê de átomos.</p>      
			        <Link className="btn-game" to="/game-paranoia/stages/01">É... vá para 1.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}