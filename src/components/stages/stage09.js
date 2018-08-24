import React from 'react';
import Header from '../header';
import Footer from '../footer';
import {Link} from 'react-router-dom';

export default function Stage09(){
	return(
		<div className="App-game">
			<Header></Header>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>9</strong> Você aperta o botão e o robô cessa de funcionar. Ótimo. Você rapidamente mergulha a mão na lata de lixo Cicopiada e pega a chave ALF, saindo mais rápido do que entrou no corredor vermelho. Bem na hora, pois logo depois você vê um cidadão infravermelho vindo pelo corredor - e ele não hesitaria em denunciá-lo como traidor para cair nas graças do Computador. Essa foi por pouco.</p>     
			        <Link className="btn-game" to="/game-paranoia/stages/14">Vá para 14.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}