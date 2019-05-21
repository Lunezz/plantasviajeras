import React, {Component} from 'react'


const fakeAuth ={
    isAuthenticated: false,
    autenticate(cb){
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb){
        this.isAuthenticated= false;
        setTimeout(cb, 100);
    }
}


class ItemMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {menuList: []};
    }

    

    getData =()=>{
        fetch("https://api.myjson.com/bins/hi73m")
        .then((response) => {
            return response.json()
        })
        .then((menuList) => {
            this.setState({menuList:menuList})
            console.log(menuList)
        })
    }
    async componentWillMount(){
        this.getData()
    }

    render(){
        let lista = this.state.menuList.map(m=>{
            return(
                <React.Fragment key={m.id} >
                    <li id={m.id}>
                        <a  href={m.link}>
                            <p className="itemList">{m.name}</p>
                        </a>
                    </li>
                </React.Fragment>
            )
        })

        return(
          
                <div className="main_menu">
                    <ul className="listaMenu padding marginT_40">
                        {lista}
                    </ul>
                </div> 
            

        );
    }
}
export default ItemMenu;