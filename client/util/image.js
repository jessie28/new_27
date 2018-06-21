import headlogo from '../image/header-logo.png';
import banner1 from '../image/banner1.png';
import banner2 from '../image/banner2.png';
import banner3 from '../image/banner3.png';

const localHost = 'http://localhost:7788';
const devHost = 'http://test.mjitech.com';
const masterHost = 'http://www.mjitech.com';

const getNewPath = (path,host)=>{
    return path.indexOf('http') < 0 ? host + path : path;
};

const getNewPic = (path,format)=>{
    let particial = path.split('.');
    if(particial.length === 2){
        particial[0] = particial[0] + '_' + format;
        return particial.join('.')
    } else {
        return path;
    }

};

const localImg = {headlogo,banner1,banner2,banner3}

module.exports = {localHost,devHost,masterHost,getNewPath,getNewPic,localImg};