import actiontypes from '../actiontype/index';
import mock from '../mock/index'
const initStart = () => {
    return {
        type : actiontypes.INITSTART,
        data : mock
    }
}
const setPickedCategory = (data)=>{
    return {
        type:actiontypes.SETPICKEDCATEGORY,
        data
    }
}
export {initStart,setPickedCategory}
