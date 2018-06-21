import React from 'react';
require('./index.css');
export default class FooterContainer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={"headerContainer"}>
                <img className={"headerlogo"} src={UTILPATH.localImg.headlogo} alt=""/>
            </div>
        )
    }


}