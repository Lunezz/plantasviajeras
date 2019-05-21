import React, {Component} from 'react';

class Busqueda extends React.Component{
  state={form:{
      buscador:'',
  }};

    render(){
        return(
            <p>Buscador: {this.props.busqueda} </p>

        );
    }
}

export default Busqueda;