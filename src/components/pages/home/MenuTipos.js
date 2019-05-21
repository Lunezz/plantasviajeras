import React, { Component } from 'react';
import './../../styles/menu-tipos.sass';
import './../../styles/init.sass';

// funciones
    function click(e){
        e.preventDefault();
        console.log('haz dado un click');
    }




// constructor de clase
    class MenuTipos extends React.Component{
        constructor(props){
            super(props);
            this.state = { menu : [] };           
        }

// obtener json
   getData=()=>{
    fetch("https://api.myjson.com/bins/tn5vo")
        .then((response) =>{
            return response.json()
        })
        .then((menu) => {
            this.setState( { menu:menu })
            console.log(menu); 
        })
   }
// montado del componente del json        
    async componentWillMount(){
        this.getData()
    } 

    
    render(){
        let listaMenu = this.state.menu.map(m => {
           return(
                <React.Fragment key={m.index} >
                 <li id={m.id}>
                    <a>
                      
                        {/* <a onClick={click}> */}
                            <img src={m.img} />
                            <p> {m.name} </p>
                    </a>
                </li> 
            </React.Fragment>
            )
       });
  
        if(listaMenu.length > 0 ){
            return(
                
                    <ul className="menuTipos"> 
                        {listaMenu}
                    </ul>

            )
        }else{
            return <p className="charge"> Cargando...</p>
        }
    }
}

export default MenuTipos;