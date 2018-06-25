import React from 'react';
import CategoryComponent from '../../components/HomeComponent/CategoryComponent/CategoryComponent';
import SubContentComponent from '../../components/HomeComponent/SubContentComponent/SubContentComponent';
import SkuListComponent from '../../components/HomeComponent/SkuListComponent/SkuListComponent';
require('./index.css');

export default class HomeContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            categoryArr:[],
            subArr:[]
        }
        this.handleCategoryClick = this.handleCategoryClick.bind(this);
        this.handleSubClick = this.handleSubClick.bind(this);
    }

    componentWillMount(){
        let {categories,currentPicked} = this.props;
        console.log("currentPicked",currentPicked)
        let currentSubCategory = categories[currentPicked[0]].categories;

        this.setState({
            categoryArr : categories,
            subArr:currentSubCategory
        })
    }

    componentWillReceiveProps(nextProps){
        let {categories,currentPicked} = nextProps;
    }

    handleCategoryClick(key){
        let arr = this.state.categoryArr;
        arr.forEach(a=>{
            if(a.img === key){
                a.activity = true;
            }else{
                a.activity = false;
            }
        });
        this.setState({
            categoryArr : arr
        })
    }
    handleSubClick(key){
        let arr = this.state.subArr;
        arr.forEach(a=>{
            if(a.name === key){
                a.activity = true;
            }else{
                a.activity = false;
            }
        });
        this.setState({
            subArr: arr
        })
    }



    render(){
        let {categories,currentPicked} = nextProps;
        return(
            <div className={"homeContainer"}>
                <CategoryComponent categoryList={this.state.categoryArr} currentPicked={currentPicked} handleCategoryClick={this.handleCategoryClick} />
                <SubContentComponent subContentList={this.state.subArr} handleSubClick={this.handleSubClick} />
                <SkuListComponent />
                <div className={"homeLight"}></div>
            </div>
        )
    }
}