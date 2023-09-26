class Circle {
    x;
    y;
    radius;
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    getRandomHex() {
        return Math.floor(Math.random() * 255);
    }
    getRandomColor() {
        let red = this.getRandomHex();
        let blue = this.getRandomHex();
        let green = this.getRandomHex();
        return "rgb(" + red + "," + blue + "," + green +")";
    }
    createCircle() {
        let ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.beginPath();
        let color = this.getRandomColor();
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.fillStyle = color
        ctx.fill();
    }
}
let radius = Math.floor(Math.random() * 80);
let x = Math.random() * window.innerWidth;
let y = Math.random() * window.innerHeight;
let circle= new Circle(x, y, radius);
circle.createCircle();
