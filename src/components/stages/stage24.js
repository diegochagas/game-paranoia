import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage24(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>24</strong> Você acha suspeita a atitude de seu amigo e segueo. Sem que ele perceba, você observa enquanto ele mexe nas engrenagens de um robô. Estranho. Este não é seu trabalho. E ele não foi ao banheiro.</p>        
			        <Link className="btn-game" to="20">Você fala com ele? Vá para 20.</Link>
			        <Link className="btn-game" to="15">Volta para a sala? Vá para 15.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}