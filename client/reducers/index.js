import actiontyps from '../actiontype/index'

function initStart(content) {
    return Object.assign({},content);
}

export default function (content={},action) {
    switch (action.type){
        case actiontyps.INITSTART:
            return initStart();
        default:
            return content
    }
}