import app from "./app"
import weChat from "./weChat"

function checkPlatform() {
    let platform=app;
    if(navigator.userAgent.toLowerCase().indexOf('micromessenger') != -1){
        platform=weChat;
    }
    return platform;
}
export default checkPlatform();
