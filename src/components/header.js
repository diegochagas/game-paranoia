import React from 'react';
import backgroundHeader from '../images/image-header.jpg';

export default function Header(){
	return(
		<header className="App-header">
          <img className="background-header" src={backgroundHeader} alt="Desenho do jogador sendo vigiado pelo computador e pelos outros personagens do Completo Alfa"/>
          <div className="titulos">
            <h1 className="App-title">Um dia no complexo alfa</h1>
            <h2>Uma aventura-solo no mundo de Paranóia</h2>
          </div>
        </header>
	);
}