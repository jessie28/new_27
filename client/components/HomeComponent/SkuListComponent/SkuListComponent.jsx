import React from 'react';
import SwiperComponent from '../../CommonComponent/SwiperComponent/SwiperComponent';
import SkuItemComponent from '../SkuItem/SkuItem';

require('./index.css');


export default class SkuListComponent extends React.Component{
    constructor(props){
        super(props);

    }


    handleItemClick(){

    }

    render(){

        let arr = [];
        for(let j = 0 ;j < 100 ; j ++ ){
            arr.push(<SkuItemComponent key={"item"+j} keys={j}/>);
        }
        let swiperOptions = {
            freeMode:true,
            slidesPerView: 4.5,
            spaceBetween: 20,
            slidesPerColumn: 3,
        };
        let swiperContainer = CONFIG.swiperContainers.skuListSwiperContainer;
        let swiperCount = arr.length;
        return(
            <div className={"skuListContent"}>
                <SwiperComponent swiperOptions={swiperOptions} swiperContainer={swiperContainer} swiperCount={swiperCount}>
                    {arr}
                </SwiperComponent>
            </div>
        )
    }
}