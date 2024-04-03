function memoize(fn) {
    var cache = new Map();
    var increment = 0;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var key = JSON.stringify(args);
        if (cache.get(key)) {
            return cache.get(key);
        }
        cache.set(key, fn.apply(void 0, args));
        console.log(key);
        increment++;
        return cache.get(key);
    };
}
var callCount = 0;
var memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
});
memoizedFn(0, 0); // 5
memoizedFn(0, 0); // 5
memoizedFn(); // 5
console.log(callCount); // 1
