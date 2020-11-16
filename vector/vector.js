// 求点到线段的距离

class Vector {
    constructor(x, y, x1= 0, y1 = 0) {
        this.x = x - x1
        this.y = y - y1
    }

    length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }

    normalize() {
        return new Vector(this.x / this.length, this.y / this.length)
    }
}

// console.log(new Vector(3, 4).length())

const vecline = new Vector(4, 5, 1, 3)
const vecpoint = new Vector(4, 2, 1, 3)
const cossita = (vecline.x * vecpoint.x  + vecline.y * vecpoint.y) / (vecline.length() * vecpoint.length())
const xita = Math.acos(cossita)
const area = vecline.length()*vecpoint.length() * Math.sin(xita)
const distance = area / vecline.length()
console.log(cossita, xita, vecpoint.length(),distance,'这就是距离')
