import React from 'react';
import SwiperComponent from '../../CommonComponent/SwiperComponent/SwiperComponent';

require('./index.css');

export default class CategoryComponent extends React.Component{
    constructor(props){
        super(props);
        this.getDom = this.getDom.bind(this)
    }

    componentWillMount(){

    }

    getDom(){
        let props = this.props;
        let categoryList = props.categoryList;
        let currentPicked = props.currentPicked;
        let handleCategoryClick = props.handleCategoryClick;
        let doms = categoryList.map((cat,index)=>{
            let defaultPic = cat.defaultPic;
            let pickPic = cat.pickPic;
            let dataInfo = {
                key:cat.id,
                subkey : 0
            }
            let d = cat.id === currentPicked[0]?
                <div key={"categoryimg_"+index} className={"categoryItem activity"} onClick={()=>handleCategoryClick(cat.id,0)}>
                    <div  className={"categoryimg"}><img src={pickPic} alt=""/></div>
                </div>
                :
                <div key={"categoryimg_"+k} className={"categoryItem"} onClick={()=>handleCategoryClick(cat.id,0)}>
                    <div  className={"categoryimg"}><img src={defaultPic} alt=""/></div>
                    <div className={"categorytext font18"}>{cat.name}</div>
                </div>;
            return d;
        });

    }

    render(){
        let props = this.props;
        let swiperOptions = {
            spaceBetween: 64,
            freeMode:true,
            slidesPerView: 'auto',
            paginationClickable: true,
        };
        let swiperContainer = CONFIG.swiperContainers.categorySwiperContainer;
        let categoryList = categoryList.length > 0 ? this.getDom() : [];
        let swiperCount = categoryList.length;
        return(
            <div className={"categoryContent"} >
                <SwiperComponent swiperOptions={swiperOptions} swiperContainer={swiperContainer} swiperCount={swiperCount}>
                    {categoryList}
                </SwiperComponent>
            </div>
        )
    }
}