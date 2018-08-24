import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage28(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>28</strong> —Eu não vou meter a mão no lixo por você, escória - diz ele.</p>
			        <p>- Então - você acusa - você se recusa a colaborar com o Computador? Isso é traição!</p>
			        <p>- Ei, eu não disse isso! Não pense que você pode me enganar assim facilmente. Vou trazer o robô aqui para que você mesmo verifique.</p>
			        <p>Ele vai até o robô, desliga e leva até você. Você pega a chave, agradece ao cidadão vermelho e segue o seu caminho.</p>
			        <Link className="btn-game" to="/stages/14">Vá para 14.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}