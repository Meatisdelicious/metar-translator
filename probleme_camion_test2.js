var cities = [];
var totalCities = 3;

function setup() {
    createCanvas(500,300);
    //i = number of cities
    for (var i=0; i < totalCities; i++) {
        var v = createVector(random(width),random(height));
        cities[i]=v;
    }
}

function draw() {
    background(0);
    fill(255);
    for (var i=0; i<cities.length; i++) {
        // coordonates of each city, in the loop and 4 pixels of size
        ellipse(cities[i].x,cities[i].y,5,5);
    }
}