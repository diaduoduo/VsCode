export default {
    platform:"app",
    back:function () {
        var data = {
            action: "finish",
            args:{

            }
        }
        invoke(data);
    },
    invite:function () {
        var data = {
            action: "invite",
            args:{
                title:"格乐利雅婚嫁",
                content:"下载APP后，填写我的邀请码即可绑定好友",
                url:process.env.NODE_ENV==='development'?'http://10.0.11.44:8001/#/download':'https://h5.topgalleria.com/#/download'
            }
        };
        invoke(data);
    },
}

//h5调用原生
function invoke(data) {
    window.location.href = "galleria-app//protocol:" + JSON.stringify(data);
}


