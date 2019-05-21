import React, { Component } from 'react';
import './../../styles/hero.sass';

class Hero extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <section className="cont-hero">
                <div className="hero">
                    <h1 className="title1">Encuentra la planta ideal para tu hogar</h1>
                    <div className="positionA bottom_10 centrado width100">
                        <div className="animacion-catarina">
                            <p className="white">EXPLORA</p>
                            <img className="catarina"src="img/catarina.svg"/>
                        </div>
                    </div>
                    
                </div>
            </section>
        );
    }
}

export default Hero;