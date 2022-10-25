"use strict"
function parseCount(argument) {
    const value = parseInt(argument, 10);
    if (isNaN(value)) {
        throw new Error("Невалидное значение");

    }
    return value;
}
function validateCount(argument) {
    try {

        return parseCount(argument);
    } catch (error) {
        console.log(error);
        return error;
    }
}

class Triangle {
    constructor(firstSide, secondSide, thirdSide) {
        if (firstSide + secondSide < thirdSide || firstSide + thirdSide < secondSide || secondSide + thirdSide < firstSide) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
    }

    getPerimeter() {
        return this.firstSide + this.secondSide + this.thirdSide;
    }

    getArea() {
        let area = Math.sqrt(this.getPerimeter() / 2 *
            (this.getPerimeter() / 2 - this.firstSide) *
            (this.getPerimeter() / 2 - this.secondSide) *
            (this.getPerimeter() / 2 - this.thirdSide));
        return Math.round(area * 1000) / 1000;
    }
}
function getTriangle(firstSide, secondSide, thirdSide) {
    try {
        return new Triangle(firstSide, secondSide, thirdSide);
    } catch (error) {
        const errorSecond = "Ошибка! Треугольник не существует";
        return { getArea: () => errorSecond, getPerimeter: () => errorSecond };
    }
}













