import React, { Component } from 'react';
import './../styles/buscador.sass';

class Buscador extends React.Component{
    state = {};
    constructor(props){
        super(props);
        
    
    }

    // state ={form:{}}
    // handleChange = e =>{
    //     const nextForm = this.state.form
    //     nextForm[e.target.name] = e.target.value;
    //     this.setState({
    //         form: nextForm,
    //     });
    // };

    // handleChange = (e) => {
    //     console.log({
    //         name: e.target.name,
    //         value: e.target.value
    //     })
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     });
    // };

    handleClick = (e) => {
        console.log(
            "was clicked"
        )
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        console.log("se detuvo");
        console.log(this.state)
    }

    
    render(){ 
        let placeholder = "buscar";
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="cont-search">
                    <div className="search">
                        <input type="text" onChange={this.props.onChange}  name="buscador" value={this.props.formValues.buscador}/>
                        <button type="submit" placeholder={this.props.placeholder} onClick={this.handleClick}> <i className="ico-search"></i></button>
                    </div>
                </div>
            </form>
    ); } 
}


export default Buscador;