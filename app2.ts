// import { Point } from "./point";

// const app: Point = new Point(3, 5);
// console.log(app.XY)
// app.setXY(2, 4)
// console.log(app.XY)

// const point2: Point = new Point(6, 8)
// console.log(app.distance(point2))

const json = '{"firstName": "Xiao", "grade": 100}';
interface Student {
    firstName: string;
    grade: string
}
const student:Student = JSON.parse(json);
console.log(student.firstName);
