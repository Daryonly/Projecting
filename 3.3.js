function sum(a) {
    var intSum = a;

    function seq(b) {
        intSum += b;
        return seq;
    }

    seq.toString = function () {
        return intSum;
    };
    return seq;
}    
alert (sum(1)(2));
alert (sum(1)(2)(3));
alert (sum(5)(-1)(2));
alert (sum(6)(-1)(-2)(-3));
alert (sum(0)(1)(2)(3)(4)(5));
