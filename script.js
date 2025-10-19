const digitsCells = Array.from(document.querySelectorAll(".digit")).map((d) => d.children)

const br = [0, 90]
const bl = [90, 180]
const tl = [180, 270]
const tr = [270, 360]
const v = [270, 90]
const h = [0, 180]
let e = [0, 0]

const zero = [br, h, h, bl, v, br, bl, v, v, v, v, v, v, v, v, v, v, tr, tl, v, tr, h, h, tl]
const one = [br, h, bl, e, tr, bl, v, e, e, v, v, e, e, v, v, e, br, tl, tr, bl, tr, h, h, tl]
const two = [br, h, h, bl, tr, h, bl, v, br, h, tl, v, v, br, h, tl, v, tr, h, bl, tr, h, h, tl]
const three = [br, h, h, bl, tr, h, bl, v, e, br, tl, v, e, tr, bl, v, br, h, tl, v, tr, h, h, tl]
const four = [br, bl, br, bl, v, v, v, v, v, tr, tl, v, tr, h, bl, v, e, e, v, v, e, e, tr, tl]
const five = [br, h, h, bl, v, br, h, tl, v, tr, h, bl, tr, h, bl, v, br, h, tl, v, tr, h, h, tl]
const six = [br, h, h, bl, v, br, h, tl, v, tr, h, bl, v, br, bl, v, v, tr, tl, v, tr, h, h, tl]
const seven = [br, h, h, bl, tr, h, bl, v, e, e, v, v, e, e, v, v, e, e, v, v, e, e, tr, tl]
const eight = [br, h, h, bl, v, br, bl, v, v, tr, tl, v, v, br, bl, v, v, tr, tl, v, tr, h, h, tl]
const nine = [br, h, h, bl, v, br, bl, v, v, tr, tl, v, tr, h, bl, v, br, h, tl, v, tr, h, h, tl]
const numbers = [zero, one, two, three, four, five, six, seven, eight, nine]

let prevSec = -1

document.addEventListener("click", () => document.documentElement.requestFullscreen())

function update() {
 const date = new Date()
 const second = date.getSeconds()
 const minute = date.getMinutes()
 const hour = date.getHours() % 12 || 12

 if (second !== prevSec) {
  prevSec = second

  e[0] = (360 / 12) * hour - 90
  e[1] = (360 / 60) * minute - 90

  const secOnes = numbers[second % 10]
  const secTens = numbers[Math.floor(second / 10)]
  const minOnes = numbers[minute % 10]
  const minTens = numbers[Math.floor(minute / 10)]
  const hourOnes = numbers[hour % 10]
  const hourTens = numbers[Math.floor(hour / 10)]

  const digits = [hourTens, hourOnes, minTens, minOnes, secTens, secOnes]

  for (let i = 0; i < digitsCells.length; i++) {
   for (let j = 0; j < digitsCells[i].length; j++) {
    const currentCell = digitsCells[i][j]
    const handle = digits[i][j]
    currentCell.style.cssText = `--first-handle: ${handle[0]}deg; --second-handle: ${handle[1]}deg;`
   }
  }
 }

 requestAnimationFrame(update)
}

setTimeout(update, 2000)
