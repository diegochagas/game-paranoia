import React from 'react';
import Header from '../header';
import Footer from '../footer';
import {Link} from 'react-router-dom';

export default function Stage01(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
		        <div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
		        </div>
				<div className="game-stage">
			        <p><strong>1</strong> Você é JOCA CAB-1, cidadão infravermelho, a mais baixa camada social do Complexo Alfa. Trabalha no P&D (Pesquisa e Desenvolvimento), a divisão do Complexo que cria novos inventos para que todos sejam felizes. Lembre-se, a felicidade é obrigatória. Quem não está feliz é um traidor. Você está feliz, cidadão?</p>
			        <p>Seu trabalho no P&D é simples: realizar trabalho escravo para os cientistas e servir de cobaia para seus experimentos, que geralmente explodem na sua cara. Que felicidade, não é, cidadão?</p>
			        <p>Hoje, chegando ao local de trabalho, você recebe de seu chefe ZECA-G-JUM 2 um envelope preto (a única cor que você pode manusear - para cidadãos de Nível Infravermelho, tocar em um objeto de qualquer outra cor é traição). ZECA diz que perdeu uma chave ALF e você deve ir buscar outra para ele na Produção, Logística e Comissariado.</p>
			        <Link className="btn-game" to="/stages/33">Vá para 33.</Link>
			    </div>
			</section>
	        <Footer/>
		</div>
	);
}