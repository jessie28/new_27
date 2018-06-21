import React from 'react';
import SwiperComponent from '../../components/CommonComponent/SwiperComponent/SwiperComponent'
require('./index.css');
export default class BannerContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newArr : []
        }
    }

    dealData(){

    }

    render(){
        let arr = [
            {
                key:3,
                height:382
            },
            {
                key:1,
                height:186
            },
            {
                key:2,
                height:186
            },
            {
                key:2,
                height:186
            },

            {
                key:3,
                height:382
            },
            {
                key:3,
                height:382
            },
        ];

        let newArr = [];
        let i = 1;
        while(i <= arr.length){
            if(arr[i] && arr[i].height === arr[i - 1].height && arr[i].height === 186){
                newArr.push([arr[i - 1],arr[i]]);
                i += 2;
            }else {
                newArr.push([arr[i - 1]]);
                i++;
            }
        }

        let nodes = newArr.map((i,k)=>{
            let d = null;
            if(i.length === 2){
                d = <div key={k} className={"banners banners2"}>
                    <img src={UTILPATH.localImg['banner'+i[0].key]} alt=""/>
                    <img src={UTILPATH.localImg['banner'+i[1].key]} alt=""/>
                </div>
            }else{
                d = <div key={k} className={"banners"}>
                    <img src={UTILPATH.localImg['banner'+i[0].key]} alt=""/>
                </div>
            }
            return d;
        });
        let swiperOptions = {
            // pagination: '.swiper-pagination',
            // prevButton:'.swiper-button-prev',
            // nextButton:'.swiper-button-next',
            // width : 392,
            // spaceBetween: 20,
            freeMode:true,
            slidesPerView: 2.6,
            paginationClickable: true,
        };
        let swiperContainer = CONFIG.swiperContainers.bannerSwiperContainer;
        let swiperCount = nodes.length;
        return(

            <div className={"bannerContainer"}>
                <SwiperComponent swiperContainer={swiperContainer} swiperOptions={swiperOptions} childCount={swiperCount}>
                    {nodes}
                </SwiperComponent>
            </div>
        )
    }


}