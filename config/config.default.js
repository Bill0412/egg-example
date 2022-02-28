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