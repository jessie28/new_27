import React from 'react';
import PropTypes from 'prop-types';
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
    }

    componentWillMount(){
        let {categories,currentPicked} = this.props;
        console.log("currentPicked",currentPicked);
        if(categories && currentPicked && currentPicked.length > 0 ){
            let currentSubCategory = categories[currentPicked[0]].categories;
            this.setState({
                categoryArr : categories,
                subArr:currentSubCategory
            })
        }

    }

    componentWillReceiveProps(nextProps){
        let {categories,currentPicked} = nextProps;
        if(categories && currentPicked && currentPicked.length > 0 ){
            let currentSubCategory = categories.filter(cat=>cat.id === currentPicked[0])[0].categories;
            this.setState({
                categoryArr : categories,
                subArr:currentSubCategory
            })
        }
    }

    render(){
        let {categories,currentPicked,setPickedCategory} = this.props;
        return(
            <div className={"homeContainer"}>
                <CategoryComponent categoryList={this.state.categoryArr} currentPicked={currentPicked} handleCategoryClick={setPickedCategory} />
                <SubContentComponent subContentList={this.state.subArr} currentPicked={currentPicked} handleSubClick={setPickedCategory} />
                <SkuListComponent categories={categories} currentPicked={currentPicked} subContentList={this.state.subArr}/>
                <div className={"homeLight"}></div>
            </div>
        )
    }
}

HomeContainer.propTypes = {
    categories: PropTypes.array,
    currentPicked: PropTypes.array
};

HomeContainer.defaultProps = {
    categories : [],
    currentPicked : []
}