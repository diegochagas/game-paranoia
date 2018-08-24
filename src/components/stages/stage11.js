import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage11(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>11</strong> O cientista começa a prender você com correias em um aparelho cheio de lâminas, uma máquina de tortura que deverá ser testada (e adivinhe quem será a cobaia), quando um robô invade a sala e começa a quebrar tudo. Alguns guardas da Segurança Interna conseguem explodir o robô louco - e depois são eliminados, porque destruir propriedade do Computador é traição.</p>
			        <p>- Muito bem - rosna o cientista - Vocês estavam aqui sozinhos antes que eu saísse. É bem provável que um de vocês tenha sabotado o robô. Terei que levá-los ao Computador para que isso seja resolvido.</p>
			        <Link className="btn-game" to="/game-paranoia/stages/17">Vá para 17.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}