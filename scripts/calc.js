Calculator = function() {
    this.value = 0;
};

Calculator.prototype.add = function(number) {
    if (typeof(number) == "number") {
        this.value += number;
    } else {
        alert("Argument must be a number");
    }
};


Calculator.prototype.minus = function(number) {
    if (typeof(number) == "number") {
        this.value -= number;
    } else {
        alert("Argument must be a number");
    }
};

