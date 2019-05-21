import React, {Component} from 'react';
import './../../../styles/editors.sass';

import ItemEditor from './ItemEditor';


class EditorsPicks extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <section className="editor">
                <div className="picks"></div>
                <h2 className="title2">Editor's Picks</h2>
                <ItemEditor></ItemEditor>
            </section>
        );
    }
}

export default EditorsPicks;