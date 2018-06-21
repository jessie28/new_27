"use strict";
import React from 'react';
import {connect} from 'react-redux';
import HeaderContainer from '../HeaderContainer/HeaderContainer'
import BannerContainer from '../BannerContainer/BannerContainer'
require('./index.css');

class PageContainer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={"pageContainer"}>
                <HeaderContainer />
                <BannerContainer />
            </div>
        )
    }
}

const select = (store)=>{
    return Object.assign({},{state:store})
}

module.exports = connect(select)(PageContainer);