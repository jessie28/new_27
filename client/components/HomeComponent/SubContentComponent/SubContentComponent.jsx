import React from 'react';
import SwiperComponent from '../../CommonComponent/SwiperComponent/SwiperComponent';

require('./index.css');

export default class SubContentComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let props = this.props;
        let subContentList = props.subContentList;
        let handleSubClick = props.handleSubClick;
        let swiperOptions = {
            freeMode:true,
            slidesPerView: 'auto',
            spaceBetween: 40
        };
        let swiperContainer = CONFIG.swiperContainers.subSwiperContainer;
        let addDom1 = subContentList.map((a,k)=>{
            let keys = a.name;
            let classNames = "subItem"+a.name.length;
            let d = <div key={"subitem_"+k} className={"subItem font24 " + (a.activity?'activity ':' ') + classNames} onClick={()=>handleSubClick(keys)}>
                {a.name}
            </div>;
            return d;
        });
        let swiperCount = addDom1.length;
        return(
            <div className={"subContent"}>
                <SwiperComponent swiperOptions={swiperOptions} swiperContainer={swiperContainer} swiperCount={swiperCount}>
                    {addDom1}
                </SwiperComponent>
            </div>
        )
    }
}