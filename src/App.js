import React, { Component } from 'react';
import './App.css';
// import Header from './components/header/Header';

import './components/styles/header.sass';
import LogoPlantas from './components/header/LogoPlantas';
import Menu from './components/header/Menu';
import Buscador from './components/header/Buscador';


import Home from './components/pages/Home';
import Busqueda from './components/pages/Busqueda';

class App extends Component {
  state={form:{
    buscador:''
  }};

  handleChange = e =>{
    this.setState({
        form: {
            ...this.state.form,
            [e.target.name]: e.target.value
        },
    });
  }

  render() {
    return (
        <div>
          <nav className="top_bar backWhite">
                <div className="width_container">
                    <LogoPlantas></LogoPlantas>
                    <Buscador onChange={this.handleChange} formValues={this.state.form}/>
                    <Menu></Menu>
                </div>
            </nav>


          <Home/>
          <Busqueda busqueda={this.state.form.buscador}/>
        </div>
    );
  }
}

export default App;
