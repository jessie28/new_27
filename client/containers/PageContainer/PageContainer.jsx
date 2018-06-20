"use strict";
import React from 'react';
import {connect} from 'react-redux';
require('./index.css');

class PageContainer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                hello
            </div>
        )
    }
}

const select = (store)=>{
    return Object.assign({},{state:store})
}

module.exports = connect(select)(PageContainer);