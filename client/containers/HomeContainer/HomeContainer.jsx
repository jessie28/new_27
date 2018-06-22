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
        let arr = [
            {
                img:'all',
                text:'全部',
                activity:true
            },

            {
                img:'a',
                text:'全部全部',
                activity:false
            },
            {
                img:'b',
                text:'全部全部',
                activity:false
            },
            {
                img:'c',
                text:'全部全部',
                activity:false
            },
            {
                img:'d',
                text:'全部',
                activity:false
            },
            {
                img:'drink',
                text:'全部全部',
                activity:false
            },
            {
                img:'e',
                text:'全部全部',
                activity:false
            },
            {
                img:'f',
                text:'全部全部',
                activity:false
            },
            {
                img:'food',
                text:'全部全部',
                activity:false
            },
            {
                img:'g',
                text:'全部',
                activity:false
            },
            {
                img:'h',
                text:'全部',
                activity:false
            },
            {
                img:'j',
                text:'全部全部全部',
                activity:false
            },
            {
                img:'k',
                text:'全部',
                activity:false
            },
            {
                img:'l',
                text:'全部',
                activity:false
            },
            {
                img:'s',
                text:'全部',
                activity:false
            },
        ];
        let arr1 = [
            {
                name : '果',
                activity : false
            },
            {
                name : '果汁',
                activity : true
            },
            {
                name : '果汁饮料',
                activity : false
            },
            {
                name : '果汁多少度',
                activity : false
            },
            {
                name : '果汁度',
                activity : false
            },
            {
                name : '果汁',
                activity : false
            },
            {
                name : '果汁饮料果汁饮料',
                activity : false
            },
            {
                name : '果汁多少度',
                activity : false
            },
            {
                name : '果汁度',
                activity : false
            },
            {
                name : '果汁',
                activity : true
            },
            {
                name : '果汁饮料',
                activity : false
            },
            {
                name : '果汁多少度',
                activity : false
            },
            {
                name : '果汁度',
                activity : false
            }
        ];
        this.setState({
            categoryArr : arr,
            subArr:arr1
        })
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
        return(
            <div className={"homeContainer"}>
                <CategoryComponent categoryList={this.state.categoryArr} handleCategoryClick={this.handleCategoryClick} />
                <SubContentComponent subContentList={this.state.subArr} handleSubClick={this.handleSubClick} />
                <div className={"homeLight"}></div>
            </div>
        )
    }
}