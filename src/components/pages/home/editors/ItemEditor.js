import React, { Component } from 'react';
import './../../../styles/editors.sass';

class ItemEditor extends React.Component{
    constructor(props){
        super(props);
        this.state ={editorList:[]};
    }

    getData = () => {
        fetch("https://api.myjson.com/bins/omtam")
        .then((response) => {
            return response.json()
        })
        .then((editorList) =>{
            this.setState({editorList:editorList})
            console.log(editorList)
        })
    }

    async componentWillMount(){
        this.getData()
    }

    render(){
        let lista = this.state.editorList.map(e =>{
            return(
                <React.Fragment key={e.id}>
                    <div className="itemEditor width100" >
                        <div className="col2 flex-wrap marginB_10">
                            <div className="width100 positionR">
                                <img className="imgItem"  src={e.img}></img>
                            
                            </div>
                            <div className="cardFicha">
                                <p className="line">{e.name}</p>
                                <a className="linkFicha marginT_5">VER FICHA TÉCNICA</a>
                            </div>
                        </div> 
        
                        <div className="col2 flex-wrap cont-info">
                            <div className="width100 flex marginB_10">    
                                <div className="info width50 ">
                                    <img  className="centrado imgAtributo" src={e.atributos[0].img}/>
                                    <h3  className="nameAtributo" >{e.atributos[0].caracteristica}</h3>
                                    <div className="width100 ">
                                        <p >{e.atributos[0].descripcion}</p>
                                    </div>
                                </div>

                                <div className="info width50">
                                    <img  className="centrado imgAtributo" src={e.atributos[1].img}/>
                                    <h3  className="nameAtributo" >{e.atributos[1].caracteristica}</h3>
                                    <div className="width100">
                                        <p >{e.atributos[1].descripcion}</p>
                                    </div>
                                </div>
                            </div>

                            <div width="width100 ">
                                <div className="info ">
                                    <p >{e.atributos[2].descripcion}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </React.Fragment>
            )
        })

        return(
            <div>
                {lista}
            </div>
        )
        
    }
}

export default ItemEditor;