import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage14(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>14</strong> Finalmente você chega ao P&D com a chave ALF. Sorrindo e contente, você se aproxima do seu chefe.</p>
			        <p>— Onde você estava? - ele pergunta.</p>      
			        <p>— Fui buscar a chave ALF que o senhor me pediu. Desculpe pela demora, a fila estava um pouco grande.</p>
			        <p>- Ah, agora me lembro — ele diz, coçando a cabeça. – É verdade, eu te mandei buscar uma chave. Pode colocar em algum canto, não vou precisar mais. Achei a minha no meu bolso.</p>
			        <p>O que você faz diante desta situação detestável?</p>     
			        <Link className="btn-game" to="/stages/25">Pula na garganta do seu chefe e grita "Chuba-chuba, eu vou te matar!" Vá para 25.</Link>
			        <Link className="btn-game" to="/stages/05">Espera feito bobo pela próxima ordem. Vá para 5.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}