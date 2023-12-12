function Circle(text_color, color) {
    this.text = text_color;
    this.color = color;
    this.spawn = spawnSVG(this.text_color, this.color);

};

function Square(text_color, color) {
    this.text = text_color;
    this.color = color;
    this.spawn = spawnSVG(this.text_color, this.color);

};

function Triangle(text_color, color) {
    this.text = text_color;
    this.color = color;
    this.spawn = spawnSVG(this.text_color, this.color);

};

module.exports = Triangle;
module.exports = Square;
module.exports = Circle;