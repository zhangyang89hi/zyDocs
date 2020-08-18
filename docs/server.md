


## nginx

nginx  #启动nginx
nginx -s quit  #快速停止nginx
nginx -V #查看版本，以及配置文件地址
nginx -v #查看版本
nginx -s reload|reopen|stop|quit   #重新加载配置|重启|快速停止|安全关闭nginx
nginx -h #帮助

```bash

# 正向代理
server {
	resolver 192.168.1.1; #指定DNS服务器IP地址
	listen 8080;
	location / {
		proxy_pass http://$http_host$request_uri; #设定代理服务器的协议和地址
	}
}
```



### config


