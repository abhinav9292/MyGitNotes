
function Shape() {
 var type="Shape";
 var sides = arguments;
}

Shape.prototype.getType = function() {
  return type;
};
Shape.prototype.getPerimeter = function() {

    var count=0, i;
    for (i = this.sides.length; i--;) {
        count+=this.sides[i];
    }
    return count;
};

function Triangle(){
    this.type="Triangle";
    if(arguments.length === 3) {
        this.sides = Array.prototype.slice.call(arguments);
    } else {
        throw('Please provide 3 sides');
    }
}

Triangle.prototype = new Shape();

function Square(){
    this.type="Square";
    if(arguments.length === 2) {
        var args = Array.prototype.slice.call(arguments);
        this.sides = args.concat(args);
    } else {
        throw('Please provide 2 sides');
    }
}

Square.prototype = new Shape();


var t = new Triangle(1,2,3);

var s = new Square(2,4);

console.log(t.getType());        // should equal “triangle”

console.log(t.getPerimeter());    // should equal 6

console.log(s.getType());          // should equal “square”

console.log(s.getPerimeter());    // should equal 12
