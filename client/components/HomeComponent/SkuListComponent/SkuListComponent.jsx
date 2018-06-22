import React from 'react';
import SwiperComponent from '../../CommonComponent/SwiperComponent/SwiperComponent';

require('./index.css');

export default class SkuListComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        let skuList = [
            {

            }
        ]

        return(
            <div className={"skuContent"}>
                <SwiperComponent>

                </SwiperComponent>
            </div>
        )
    }
}