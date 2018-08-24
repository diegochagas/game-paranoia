import React from 'react';
import Header from '../header';
import Footer from '../footer';
import {Link} from 'react-router-dom';

export default function Stage02(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
		        <div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
		        </div>
				<div className="game-stage">
		        	<p><strong>2</strong> Você entra no banheiro AXK e não encontra o robô ali. Um cidadão está no banheiro, e lhe entrega um bilhete. Não há tempo de ler agora, senão o robô pode sumir. Se quiser pegar o papel, anote mentalmente que fez isso. Se não quer, simplesmente jogue fora.</p>
			        <Link className="btn-game" to="/game-paranoia/stages/34">Vá para 34</Link>
		    	</div>
		    </section>
	        <Footer/>
		</div>
	);
}