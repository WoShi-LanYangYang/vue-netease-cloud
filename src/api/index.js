import axios from "axios";

const baseUrl = 'http://localhost:3000'

//获取轮播图的api，type资源类型，对应以下类型，默认为0，为pc（personal computer）
//1：Android，2：iPhone，3：iPad
export function getBanner(type = 0) {
    /*//type 指定参数默认值，（没有传参数就让type=0）
    //方法一
    if (type){
        type=type
    }else {
        type=0
    }
    //方法二
    type=type?type:0
    //方法三
    type=type||0*/
    //return axios.get(baseUrl+'/banner?type='+type)
    return axios.get(`${baseUrl}/banner?type=${type}`)//用模板字符串拼接字符串

}

//获取歌单列表
export function getMusicList(limit = 10) {
    return axios.get(`${baseUrl}/personalized?limit=${limit}`)
}

//获取某歌单对应的歌曲
export function getPlayListDetail(id) {
    return axios.get(`${baseUrl}/playlist/detail?id=${id}`)
}


//export default 只能导出一个值
//export 可以导出多个值