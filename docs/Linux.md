




### mac
1. homebrew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"


cd "$(brew --repo)"
git remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git
brew update

brew list
brew search nginx
brew info nginx

brew install nginx
brew uninstall nginx
brew remove nginx
brew update

brew install nginx
brew services start nginx
brew services stop nginx
brew services restart nginx
brew services list

brew services 服务相关配置以及日志路径
安装路径：/usr/local/Cellar/
配置路径：/usr/local/etc/
日志路径：/usr/local/var/log

2. proxy
export http_proxy=http://127.0.0.1:1087;
export https_proxy=http://127.0.0.1:1087;
//开启代理
export http_proxy=127.0.0.1:1087
export https_proxy=127.0.0.1:1087
//关闭代理
unset http_proxy
unset https_proxy