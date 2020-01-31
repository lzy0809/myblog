# myblog
通过nodejs搭建一个播客系统的后台；
1、进入到项目的跟目录；
2、初始化项目：npm i --registry=https://registry.npm.taobao.org
3、添加cross-env插件：npm i cross-env —save-dev --registry=https://registry.npm.taobao.org
4、修改packgae文件 添加“cross-env NODE_ENV=dev ”
5、安装两个插件：npm I koa-generic-session koa-redis redis —save --registry=https://registry.npm.taobao.org
6、安装mysql插件：npm install mysql —save --registry=https://registry.npm.taobao.org
7、安装redis：brew install redis
8、开启redis：redis-server（不必要）
11、终端命令行测试：redis-cli 然后调用set、get方法；（仅为测试，不必要）
12、下载nginx：brew install nginx
13、修改nginx配置文件：sudo vi /usr/local/etc/nginx/nginx.conf
    
￼

￼
14、需要安装xss插件：npm install xss —save --registry=https://registry.npm.taobao.org
15、安装日志插件：npm install koa-morgan —save --registry=https://registry.npm.taobao.org
