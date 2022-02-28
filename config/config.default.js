exports.keys = 'sdlsdkfjlskdfklsdf';

// add view's configuration
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks',
    }
};

// add news' configurations
exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
};

// add middleware robot
exports.middleware = ['robot'];
// robot's configurations
exports.robot = {
    ua: [/curl/i, /Baiduspider/i],
};