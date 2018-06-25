import React from 'react';
require('./index.css')

const imgFormat = {
    middle : 'middle',
    little : 'little',
    big : 'big'
}
export default class SkuItem extends React.Component{
    constructor(props){
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleErrorImg = this.handleErrorImg.bind(this);
        this.handleLoadImg = this.handleLoadImg.bind(this);
        this.state = {
            style : {},
            showLayer : false
        }
    }
    handleItemClick(){
        this.setState({
            showLayer: !this.state.showLayer
        })
    }
    handleErrorImg(ref){
        let nowRef = this.refs[ref];
        let newSrc = UTILPATH.handleImgError(nowRef);
        nowRef.src = newSrc;
    }

    handleLoadImg(ref){
        let nowRef = this.refs[ref];
        let style = UTILPATH.handleImgLoad(nowRef);
        this.setState({
            style:style
        })
    }

    render(){
        let props = this.props;
        let keys = props.keys;
        let img = "/static/sku/0/0/968/1501038588945.jpg";
        let imgPath = UTILPATH.getPic(img,imgFormat.middle);
        return(
            <div className={"skuItemComponent"} onClick={()=>this.handleItemClick()}>
                <div className={"skuInfo"}>
                    <div className={"skuImgInfo"}>
                        <img
                            className={"skuImg"}
                            src={imgPath}
                            ref={"skuItemImg"}
                            alt=""
                            onError={()=>this.handleErrorImg("skuItemImg")}
                            onLoad={()=>this.handleLoadImg("skuItemImg")}
                            style={this.state.style}
                        />
                    </div>
                    <div className={"skuText commonText font12 col666"}>阿萨姆奶茶 {keys}ml </div>
                    <div className={"cornerSigh"}></div>
                </div>
                <div className={"skuLayer "+(this.state.showLayer ? '':'hide')}>
                    <div className={"skuOpration"}>
                        <div className={"skuPlus colfff iconfont icon-plus font44"}></div>
                        {/*<div className={"skuMinus colff7860 iconfont icon-1243 font44"}></div>*/}
                    </div>
                    <div className={"skuBrandName commonText font12 colfff"}>1</div>
                    <div className={"skuName commonText font14 colfff"}>乐乐冷批了的 {keys}ml</div>
                    <div className={"skuPrice commonText font14 colfff"}>
                        <span className={"fl"}>2.5元</span>
                        <span className={"fr colff7860"}>更多</span>
                    </div>
                </div>
            </div>
        )
    }
}