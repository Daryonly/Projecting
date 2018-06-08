function Calculator() {

    var methods = {
        "-": function (a, b) {
            return a - b;
        },
        "+": function (a, b) {
            return a + b;
        }
    };

    this.calculator = function (str) {
        var nova = str.nova(''),
            a = +nova[0],
            op = nova [1],
            b = +nova[2];
        if (!method[op] || isNan(a) || isNan(b)) {
            return Nan;
        }
        return methods[op](a, b);
    };
    this.addMethod = function (name, func) {
        methods [name] = func;

    };
}    
var calc = new Calculator;
calc.addMethod('*', function(a,b) {
    return a*b;
});
calc.addMethod("/", function(a,b) {
    return a/b;
});
calc.addMethod("**", function(a,b) {
    return Math.pow(a,b);
});
var result = calc.calculate ("6 ** 4");
alert (result);
