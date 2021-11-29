window.onerror = function (message, filename, lineno, colno, error) {
    console.log("出错了！--> %s", error.stack);
    console.log(message)
    console.log(filename)
    console.log(lineno)
    console.log(colno)
    console.log(error)
}