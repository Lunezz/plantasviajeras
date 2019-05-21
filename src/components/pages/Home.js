import React, { Component } from 'react';
import Hero from './home/Hero';
import MenuTipos from './home/MenuTipos';
import EditorsPicks from './home/editors/EditorsPicks';

// import Header from './../header/Header';

class Home extends Component {

  

    render() {
      return (
          <div>
            <Hero/>
            <MenuTipos />
            <EditorsPicks />
           
          </div>
      );
    }
  }
  
  export default Home;

  