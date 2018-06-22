import React from 'react';
import SwiperComponent from '../../CommonComponent/SwiperComponent/SwiperComponent';

require('./index.css');

export default class CategoryComponent extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){

    }

    render(){
        let props = this.props;
        let categoryList = props.categoryList;
        let handleCategoryClick = props.handleCategoryClick;
        let swiperOptions = {
            spaceBetween: 64,
            freeMode:true,
            slidesPerView: 'auto',
            paginationClickable: true,
        };
        let swiperContainer = CONFIG.swiperContainers.categorySwiperContainer;

        let addDom = categoryList.map((a,k)=>{
            let keys = a.img;
            let d = a.activity ?
                <div key={"categoryimg_"+k} className={"categoryItem activity"} onClick={()=>handleCategoryClick(keys)}>
                    <div  className={"categoryimg"}><img src={require(`../../../image/${a.img}_1.png`)} alt=""/></div>
                </div>
                :
                <div key={"categoryimg_"+k} className={"categoryItem"} onClick={()=>handleCategoryClick(keys)}>
                    <div  className={"categoryimg"}><img src={require(`../../../image/${a.img}.png`)} alt=""/></div>
                    <div className={"categorytext font18"}>{a.text}</div>
                </div>;
            return d;
        });
        let swiperCount = addDom.length;
        return(
            <div className={"categoryContent"} >
                <SwiperComponent swiperOptions={swiperOptions} swiperContainer={swiperContainer} swiperCount={swiperCount}>
                    {addDom}
                </SwiperComponent>
            </div>
        )
    }
}