var config = {
    // debug 为 true 时，用于本地调试
    debug: false,
    //hmll压缩开启
    pretty:false,
    name: '俊峰博客', // 社区名字
    description: '俊峰博客技术源地', // 社区的描述
    keywords: 'nodejs, node, express, connect, socket.io',
    // 社区的域名
    host: 'localhost',

    //mongodb配置
    db: 'mongodb://localhost:27017/junr',
    // 程序运行的端口
    port: 3000,
    upload: {
        url: '/public/upload/'
    }
}

module.exports = config;