import React, {Component} from 'react';
import './../styles/header.sass';
import LogoPlantas from './LogoPlantas';
import Menu from './Menu';
import Buscador from './Buscador';
import { BrowserRouter } from 'react-router-dom';


class Header extends React.Component{
    state={form:{
        buscador:''
    }};

    constructor(props){
        super(props);
    }

    handleChange = e =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            },
        });
    }

    render(){
        return(
                <nav className="top_bar backWhite">
                    <div className="width_container">
                        <LogoPlantas></LogoPlantas>
                        <Buscador onChange={this.handleChange} formValues={this.state.form}/>
                        <Menu></Menu>
                    </div>
                </nav>
        );
    }
}

export default Header;