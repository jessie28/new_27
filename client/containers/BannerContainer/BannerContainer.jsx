import React from 'react';
import SwiperComponent from '../../components/CommonComponent/SwiperComponent/SwiperComponent'
require('./index.css');
export default class BannerContainer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let arr = [1,2,3,1,2,3];
        let nodes = arr.map((i,k)=>{
            return(
                <div key={k} className={"banners"}>
                    <img src={UTILPATH.localImg['banner'+i]} alt=""/>
                </div>
            )
        });
        console.log(nodes);
        let swipeOptions = {
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },
            pagination: '.swiper-pagination',
            slidesPerView: 1,
            width : 392,
            paginationClickable: true,
            spaceBetween: 20
        };
        let swiperContainer = CONFIG.swiperContainers.bannerSwiperContainer;
        let swiperCount = nodes.length;
        return(

            <div className={"bannerContainer"}>
                <SwiperComponent swiperContainer={swiperContainer} swipeOptions={swipeOptions} childCount={swiperCount}>
                    {nodes}
                </SwiperComponent>
            </div>
        )
    }


}