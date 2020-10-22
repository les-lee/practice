// 求点到线段的距离

class Vertor {
    constructor(x, y, x1= 0, y1 = 0) {
        this.x = x - x1
        this.y = y - y1
    }

    length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }
}

// console.log(new Vertor(3, 4).length())

const point = new Vertor(3,4, 2, 11/4)
const line1 = new Vertor(1,-2, 2, 11/4)
const line12point = point.x * line1.x  + point.y * line1.y
console.log(line1.x * point.x , line1.y * point.y, line1)
const cossita = line12point/ (line1.length() * point.length())
const cmo = point.length() * cossita
// const e = new Vector(line1.x - point.x, line1.y - point.y)
const distance = Math.abs(Math.tan(Math.acos(cossita))*cmo)
console.log(Math.acos(cossita)) 
console.log(distance,'这就是距离')
