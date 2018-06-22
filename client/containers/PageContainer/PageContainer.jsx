"use strict";
import React from 'react';
import {connect} from 'react-redux';
import HeaderContainer from '../HeaderContainer/HeaderContainer'
import BannerContainer from '../BannerContainer/BannerContainer'
import ActivityContainer from '../ActivityContainer/ActivityContainer'
import HomeContainer from '../HomeContainer/HomeContainer'
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
                <ActivityContainer />
                <HomeContainer />
            </div>
        )
    }
}

const select = (store)=>{
    return Object.assign({},{state:store})
}

module.exports = connect(select)(PageContainer);