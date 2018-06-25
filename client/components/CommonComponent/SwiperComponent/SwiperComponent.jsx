import React from 'react';
import Swiper from 'swiper';
import SwiperContainers from '../../../config/swiperContainer'
require('./swiper.css')
export default class SwiperComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            swiper : null
        }
    }

    componentDidMount(){
        let {swiperContainer,swiperOptions} = this.props;
        this.setState({
            swiper : new Swiper("."+swiperContainer, swiperOptions)
        })

    }

    componentDidUpdate(prevProps){
        const { childCount } = this.props;
        if (prevProps.childCount !== childCount) {
            this.state.swiper.init();
        }
    }

    componentWillUnmount() {
        this.setState({
            swiper : null
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