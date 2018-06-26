import React from 'react';
import SwiperComponent from '../../CommonComponent/SwiperComponent/SwiperComponent';

require('./index.css');

export default class SubContentComponent extends React.Component{
    constructor(props){
        super(props);
        this.getSubDom = this.getSubDom.bind(this);
    }

    getSubDom(){
        let {subContentList,handleSubClick,currentPicked} = this.props;
        let doms = subContentList.map((sub,index)=>{
            let classNames = "subItem" + sub.name.length;
            let dataInfo = {
                key:currentPicked[0],
                subkey : sub.id
            }
            let d = <div key={"subitem_"+index} className={"subItem font24 " + (sub.id === currentPicked[1]?'activity ':' ') + classNames} onClick={()=>handleSubClick(dataInfo)}>
                {sub.name}
            </div>;
            return d;
        });
        return doms;
    }

    render(){
        let props = this.props;
        let subContentList = props.subContentList;
        let swiperOptions = {
            freeMode:true,
            slidesPerView: 'auto',
            spaceBetween: 40
        };
        let swiperContainer = CONFIG.swiperContainers.subSwiperContainer;
        let subList = subContentList && subContentList.length > 0 ? this.getSubDom() : [];
        let swiperCount = subList.length;
        return(
            <div className={"subContent"}>
                <SwiperComponent swiperOptions={swiperOptions} swiperContainer={swiperContainer} swiperCount={swiperCount}>
                    {subList}
                </SwiperComponent>
            </div>
        )
    }
}