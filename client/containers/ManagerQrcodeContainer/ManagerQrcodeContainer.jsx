import React from 'react';
require('./index.css');
export default class ManagerQrcodeContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newArr : []
        }
    }

    dealData(){

    }

    render(){
        let swiperOptions = {
            freeMode:true,
            slidesPerView: 2.6,
            paginationClickable: true,
        };
        let swiperContainer = CONFIG.swiperContainers.bannerSwiperContainer;
        let swiperCount = nodes.length;
        return(

            <div className={"activityContainer"}>

            </div>
        )
    }


}