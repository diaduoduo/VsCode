//封装　操作localstorage本地储存的方法，模块化文件
//nodejs基础
var storage = {
    set(key,value){
        localStorage.setItem(key, JSON.stringify(value));
    },
    get(key){
        return JSON.parse(localStorage.getItem(key))
    },
    remove(key){
        localStorage.removeItem(key)
    }
}
export default storage;