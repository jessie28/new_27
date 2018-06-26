import React from 'react';
import SwiperComponent from '../../CommonComponent/SwiperComponent/SwiperComponent';
import SkuItemComponent from '../SkuItem/SkuItem';

require('./index.css');


export default class SkuListComponent extends React.Component{
    constructor(props){
        super(props);
        this.onSlideChangeEnd = this.onSlideChangeEnd.bind(this);
        this.onSlideChangeStart = this.onSlideChangeStart.bind(this);
    }


    handleItemClick(){

    }

    componentWillMount(){
        this.initData.bind(this)()
    }

    onSlideChangeEnd(event,prop){
        console.log("onSlideChangeEnd",event,prop);
    }
    onSlideChangeStart(event,prop){
        console.log("onSlideChangeStart",event,prop);
    }

    getList(len){
        let dom = [];
        for(let d = 0; d < len; d++){
            dom.push(<SkuItemComponent key={"item"+d} keys={d}/>);
        }
        return dom;
    }

    initData(){
        let {categories,currentPicked,subContentList} = this.props;
        console.log(this.props);
        let allSkus = categories.map((cat,index)=>{
               return cat.skuList;
        })
        console.log("allSkus",allSkus)
    }

    render(){

        let arr = [];
        let allArr = [];
        let initArr = [3,1,6,8,9,10];
        let that = this;
        initArr.forEach(v=>{
            let d = [];
            let lastNum = v % 3;
            if(v > 3){
                for(let k = 0;k<v;k+=3){
                    allArr.push(that.getList())
                }
            }else{
                allArr.push(that.getList(v));
            }
        })

        for(let j = 0 ;j < 100 ; j ++ ){
            arr.push(<SkuItemComponent key={"item"+j} keys={j}/>);
        }
        let swiperOptions = {
            freeMode:true,
            slidesPerView: 4.5,
            spaceBetween: 20,
            slidesPerColumn: 3,
            onSlideChangeEnd : this.onSlideChangeEnd,
            onSlideChangeStart : this.onSlideChangeStart
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