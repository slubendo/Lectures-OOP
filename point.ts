export class Point {

    // Fields
    private _x: number;
    private _y: number;

    // constructor
    constructor(x: number, y: number) {
        this._x = x
        this._y = y
    }

    // Methods


    get XY(): [number, number] {
        return [this._x, this._y]
    }

    setXY(x: number, y: number): void {
        this._x = x
        this._y = y
    }

    distance(anotherPoint: Point): number {
        const x2: number = anotherPoint._x
        const y2: number= anotherPoint._y
        const calc: number = Math.sqrt(Math.pow((x2 - this._x), 2) + Math.pow((y2 - this._y), 2)) 
        return calc
    }
}