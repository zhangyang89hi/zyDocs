

/**
 * instanceof 
 */
function instanceOf (f, F) {
    var proto = Object.getPrototypeOf(f)
    while(proto) 
    {
        if (proto === F.prototype) {
            return true
        } else {
            proto = Object.getPrototypeOf(proto)
        }
    }
    return false
}