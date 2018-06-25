import actiontyps from '../actiontype/index'


const allKey = {
    id:0,
    name : "全部"
};

function initStart(content,data) {
    let currentPicked = [0,0];
    let categories = dealCategories(data.categories);
    // let currentCategory = getPickedCategory(categories);
    let newContent = {
        categories,
        currentPicked
    };
    return Object.assign({},content,newContent);
}

/**
 * 初始化处理category数据
 * @param categories
 * @returns {*}
 */
function dealCategories(categories) {
    let allSkus = [];
    let categoryList = categories.map((c)=>{
        let newItemList = {};
        let categoryNameList = [];
        c.items.forEach(item=>{
            let category = item.category
            let categoryName = item.categoryName;
            if(newItemList[category] && newItemList[category].length > 0){
                newItemList[category].push(item);
            }else{
                categoryNameList.push({
                    id:category,
                    name:categoryName
                });
                newItemList[category] = [];
                newItemList[category].push(item);
            }
        });
        let subCategoryNames = [...new Set(categoryNameList)];
        subCategoryNames.unshift(allKey);
        newItemList[allKey.id] = c.items;
        allSkus = allSkus.concat(c.items);
        return {
            id : c.id,
            name : c.name,
            defaultPic : require(`../image/${c.id}.png`),
            pickPic : require(`../image/${c.id}_1.png`),
            categories : subCategoryNames,
            skuList : newItemList
        }
    });
    let temp = {};
    temp[allKey.id] = allSkus;
    categoryList.unshift({
        id : allKey.id,
        name : allKey.name,
        defaultPic : require(`../image/0.png`),
        pickPic : require(`../image/0_1.png`),
        categories : [allKey],
        skuList : temp
    });
    return categoryList

}

function dealCategories1(categories) {
    let allSkus = categories.reduce((pre,next)=>{ return (pre.concat(next.items))},[]);
    let allCategories = [];
    let categoryList = categories.map((c,i)=>{
        let subCategoryNames = [...new Set(c.items.map(item=>item.categoryName))];
        allCategories = allCategories.concat(subCategoryNames);
        subCategoryNames.unshift("全部");
        return {
            id : c.id,
            name : c.name,
            defaultPic : require(`../image/${c.id}.png`),
            pickPic : require(`../image/${c.id}_1.png`),
            categories : subCategoryNames
        }
    });
    categoryList.unshift({
        id : 0,
        name : "全部",
        defaultPic : require(`../image/0.png`),
        pickPic : require(`../image/0_1.png`),
        categories : ["全部"],
        skuList : [{category:'全部',skuList:allSkus,skuListCount:allSkus.length}]
    });
    // let allCategorySkus = {};
    let allCategorySkus = allCategories.map((c)=>{
        // allCategorySkus[c] = allSkus.filter(sku=>sku.categoryName === c);
        let skuList = allSkus.filter(sku=>sku.categoryName === c);
        return {
            category : c,
            skuList : skuList,
            skuListCount : skuList.length
        }
    });
    categoryList.forEach(cat=>{
        cat.skuList = allCategorySkus.filter(a=>cat.categories.includes(a.category));
        let tempAllSkuList = cat.skuList.reduce((pre,next)=>{return pre.concat(next.skuList)},[]);
        cat.skuList.unshift({
            category:'全部',
            skuList: tempAllSkuList,
            skuListCount:tempAllSkuList.length
        })
    });
    return categoryList
}




/**
 * 获取当前选中的数据
 * @param newCategories
 * @returns {*}
 */
function getPickedCategory(newCategories) {
    let currentCategory = newCategories[currentPicked[0]];
    currentCategory.pickedCategory = currentCategory.categories[currentPicked[1]];
    currentCategory.pickedSkuList = currentCategory.skuList.filter(c=>c.category === currentCategory.pickedCategory);
    return currentCategory;
}

function setPickedCategory(content,{key,subkey}) {
    let currentPicked = [key,subkey];
    // let categories = content.categories;
    // let currentCategory = getPickedCategory(categories);
    return Object.assign({},content,{currentPicked});
}

/**
 * 更新商品信息（web socket）
 * @param item
 */
function updatePickeCategory(item) {

}

export default function (content={},action) {
    switch (action.type){
        case actiontyps.INITSTART:
            return initStart(content,action.data);
        case actiontyps.SETPICKEDCATEGORY:
            return setPickedCategory(content,action.data);
        default:
            return content
    }
}