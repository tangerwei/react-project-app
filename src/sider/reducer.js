import * as ActionTypes from './actionTypes';

const initState = {
    config: [{
        path: "/Home/All",
        icon: "file",
        text: "全部文件",
        children:[{
            path: "/Home/picture",
            icon: "file-jpg",
            text: "图片"
        },{
            path: "/Home/document",
            icon: "file-text",
            text: "文档"
        },{
            path: "/Home/movie",
            icon: "video-camera",
            text: "视频"
        },{
            path: "/Home/music",
            icon:"customer-service",
            text: "音乐"
        },{
            path: "/Home/other",
            text: "其他"
        }]
    },{
        path: "/Home/share",
        icon: "share-alt",
        text: "我的分享"
    },{
        path: "/Home/delete",
        icon: "delete",
        text: "回收站"
    },{
        path: "/Home/user",
        icon: "user",
        text: "用户信息"
    },{
        path: "/Home/setting",
        icon: "setting",
        text: "设置"
    }]
}

function reducer(state = initState, actions) {
    switch (actions.type) {
        case ActionTypes.SETSIDERCONFIG:
            return { ...state, config: actions.config };
        default:
            return state;
    }
}

export default reducer;