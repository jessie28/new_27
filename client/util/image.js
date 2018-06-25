import headlogo from '../image/header-logo.png';
import banner1 from '../image/banner1.png';
import banner2 from '../image/banner2.png';
import banner3 from '../image/banner3.png';
import defaultImg from '../image/default.png';

const localHost = 'http://localhost:7788';
const devHost = 'http://test.mjitech.com';
const masterHost = 'http://www.mjitech.com';

/**
 * 获取新的图片链接
 * @param path
 * @param host
 * @returns {*}
 */
const getNewPath = (path,host)=>{
    return path.indexOf('http') < 0 ? host + path : path;
};

/**
 * 获取新的规格的图片地址
 * @param path
 * @param format
 * @returns {*}
 */
const getNewFormatPath = (path,format)=>{
    let particial = path.split('.');
    if(particial.length === 2){
        particial[0] = particial[0] + '_' + format;
        return particial.join('.')
    } else {
        return path;
    }

};
/**
 * 获取本地图片的新规格链接
 * @param path
 * @param format
 * @returns {*}
 */
const getPic = (path,format)=>{
    let newPath = getNewFormatPath(path,format);
    newPath = getNewPath(newPath,localHost);
    return newPath;
};


const handleImgError = (ref)=>{
    let src = ref.src;
    if(src.indexOf(localHost) > -1){
        let len = src.indexOf(localHost) + localHost.length;
        src = devHost + src.substring(len);
    }else{
        src = defaultImg
    }
    return src;
}

const handleImgLoad = (ref)=>{
    let width = ref.width;
    let height = ref.height;
    let style = {}
    if(width >= height){
        style ={
            width : "100%",
            height : "auto"
        }
    }else{
        style ={
            width : "auto",
            height : "100%"
        }
    }
    return style;
}

const localImg = {headlogo,banner1,banner2,banner3,defaultImg}

module.exports = {localHost,devHost,masterHost,getPic,handleImgError,handleImgLoad,localImg};