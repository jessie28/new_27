import React from 'react';
import Swiper from 'swiper';
import SwiperContainers from '../../../config/swiperContainer'
require('./swiper.css');

let swiperListValues = Object.values(SwiperContainers);
let initSwiperList = [];
swiperListValues.forEach(s=>{
    initSwiperList[s] = null;
});

export default class SwiperComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            swiperList :initSwiperList,
            swiper : null
        }
    }

    componentDidMount(){
        let {swiperContainer,swiperOptions} = this.props;
        let swiperList = this.state.swiperList;
        swiperList[swiperContainer] =  new Swiper("."+swiperContainer, swiperOptions);
        this.setState({
            swiperList : swiperList
        })

    }

    componentDidUpdate(prevProps){
        const { swiperCount,swiperContainer } = this.props;
        if (prevProps.swiperCount !== swiperCount) {
            this.state.swiperList[swiperContainer].init();
        }
    }

    componentWillUnmount() {
        this.setState({
            swiperList : initSwiperList
        })
    }

    render(){
        let props = this.props;
        let {swiperContainer,swiperOptions} = props;
        let childNodes = React.Children.map(props.children,function (child,index) {
            return (
                <div key={swiperContainer + "swiper" +index} className={"swiper-slide"}>
                    {child}
                </div>
            )
        });
        return(
            <div className={"swiper-container " + swiperContainer}>
                <div className={"swiper-wrapper"}>
                    {childNodes}
                </div>
                {
                    swiperOptions && swiperOptions.pagination ? <div className="swiper-pagination"></div> : null
                }
                {
                    swiperOptions && swiperOptions.prevButton ?  <div className="swiper-button-prev"></div> : null
                }
                {
                    swiperOptions && swiperOptions.nextButton ?  <div className="swiper-button-next"></div> : null
                }

            </div>
        )
    }
}