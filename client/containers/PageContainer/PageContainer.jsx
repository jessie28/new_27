"use strict";
import React from 'react';
import {connect} from 'react-redux';
import HeaderContainer from '../HeaderContainer/HeaderContainer'
import BannerContainer from '../BannerContainer/BannerContainer'
import ActivityContainer from '../ActivityContainer/ActivityContainer'
import HomeContainer from '../HomeContainer/HomeContainer'
require('./index.css');
import {initStart,setPickedCategory} from "../../actions";

class PageContainer extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        let {dispatch} = this.props;
        dispatch(initStart());
    }
    render(){
        let {dispatch,state} = this.props;
        console.log(this.props);
        return (
            <div className={"pageContainer"}>
                <HeaderContainer />
                <BannerContainer />
                <ActivityContainer />
                <HomeContainer
                    categories={state.categories}
                    currentPicked={state.currentPicked}
                    setPickedCategory={(data)=>dispatch(setPickedCategory(data))}
                />
            </div>
        )
    }
}

const select = (store)=>{
    console.log("store",store);
    return Object.assign({},{state:store})
}

module.exports = connect(select)(PageContainer);