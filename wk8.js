//Array classSupplies
var classSupplies=('Marker', 'Paper', 'Scissors');
//three classes
class Marker {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
}

class Paper {
    constructor(brand, type) {
        this.brand = brand;
        this.type = type;
    }
}
class Scissors {
    constructor(brand, shape) {
        this.brand = brand;
        this.shape = shape;
    }
}
//log to the console
const Marker1 = new Marker('Crayola', 'Red');
console.log (Marker1.brand, Marker1.color);
const Paper1 = new Paper('Oxford', 'College');
console.log(Paper1.brand, Paper1.type);
const Scissors1 = new Scissors ('Fiskars', 'Round');
console.log(Scissors1.brand, Scissors1.shape);

