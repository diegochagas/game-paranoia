import React from 'react';
import Header from '../header';
import Footer from '../footer';
import {Link} from 'react-router-dom';

export default function Stage05(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>5</strong> O cientista ordena que você espere aqui. Ele vai até a sala de testes buscar um novo equipamento, algo que não irá transformá-lo em cinzas, você espera. Felizmente você não está sozinho. CHUÁ TIB 1, seu melhor amigo, também trabalha aqui-e vocês podem ficar conversando enquanto ZECA não chega.</p>
			        <p>Durante a conversa, CHUÁ pede licença para ir ao banheiro. Mas você nota que ele entra em uma sala que não tem banheiro. Lembra-se também que, antes de sair, ele estava mexendo em uma estranha caixa preta sobre a mesa. Esquisito!</p>
			        <Link className="btn-game" to="/stages/24">Se quiser seguir seu amigo, vá para 24. </Link>
			        <Link className="btn-game" to="/stages/39">Se fica esperando, vá para 39. </Link>
			        <Link className="btn-game" to="/stages/22">Se quer examinar a caixa, vá para 22.</Link>
			    </div>
			</section>
			<Footer/>
		</div>
	);
}