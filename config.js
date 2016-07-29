var config = {
    // debug 为 true 时，用于本地调试
    debug: false,
    //hmll压缩开启
    pretty:false,
    name: '俊峰的代码人生', // 社区名字
    description: '游走于前端的技术屌丝，喜欢各种JS特效，关心各种开源技术，俊峰的代码站，我的代码人生', // 社区的描述
    keywords: 'nodejs, node, express, connect, socket.io，html5,移动端技术',
    // 社区的域名
    host: 'http://www.he-jun.cn',

    //mongodb配置
    db: 'mongodb://localhost:27017/junr',
    // 程序运行的端口
    port: 3000,
    upload: {
        url: '/public/upload/'
    }
}

module.exports = config;