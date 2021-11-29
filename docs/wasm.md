## 安装
Git
CMake
编译工具
Python


$ git clone https://github.com/juj/emsdk.git
$ cd emsdk
$ ./emsdk install latest
$ ./emsdk activate latest

emsdk activate --system latest
emsdk_env.sh

$ source ./emsdk_env.sh --build=Release
$ source ./emsdk_env --build=Release
```
E:\Web\wasm\emsdk\upstream\emscripten;
E:\Web\wasm\emsdk\node\14.15.5_64bit\bin;
E:\Web\wasm\emsdk
```

emcc -v

emcc hello.c -o hello.html -s WASM=1
emcc hello.c -o hello.html -s EXIT_RUNTIME=1

-O0, -O1, -O2, -O3 -Os

emcc hello.c -o hello.html -O3 -s WASM=1 -s "EXPORTED_RUNTIME_METHODS=['ccall','cwrap']"

Module.cwrap('hello', 'number', null, null)
Module.ccall('hello', Number, null, null)