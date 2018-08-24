import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage36(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>36</strong> "Vamos verificar isso", diz aquele que parece ser um oficial da Segnt, que tem nível de segurança esmeralda. Ele pega o papel e arrasta você até o P&D pela orelha. Lá, pergunta ao cientista se ele realmente entregou aquele papel.</p>        
			        <p>— Não sei do que está falando — seu chefe responde ao guarda. — Na verdade sempre achei esse indivíduo meio estranho.</p>
			        <p>Sob suspeita de ser um traidor, você é "gentilmente" levado para a sala de reprogramação, onde sofre um pouquinho de tortura e uma lavagem cerebral completa. Seja feliz.</p>
			        <Link className="btn-game" to="/stages/01">Recomece com um novo clone. Vá para 1.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}