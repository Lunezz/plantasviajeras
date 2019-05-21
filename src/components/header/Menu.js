import React, { Component } from 'react';
import ItemMenu from './ItemMenu';




class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = { show : false}
        this.toggleDiv = this.toggleDiv.bind(this);
    }

    toggleDiv = ()=> {
        const { show } = this.state;
        this.setState({ show : !show})
    }

    render(){
        return(
            <div>
                <button className="open_menu" onClick={this.toggleDiv }>
                    {this.state.show ? 'Cerrar -' : 'Menu +'}
                </button>
                {this.state.show &&  <ItemMenu /> }
            </div>
        );
    }
}

export default Menu;