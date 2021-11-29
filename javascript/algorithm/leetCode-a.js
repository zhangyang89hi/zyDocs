
var nums = [2, 7, 11, 15, 120, 1121, 22344]

function findTarget(nums, target) {
    for (let i=0; i<nums.length;i++) {
        for (let j=0; j<nums.length;j++) {
            if ((nums[i] + nums[j] === target) && (i!==j)) {
                return [i, j, nums[i], nums[j]]
            }
        }
    }
}
// 1
function findTargetMap(nums, target) {
    const m = new Map()
    for (let i=0; i<nums.length; i++) {
        let diff = target - nums[i]
        if (m.has(diff)) {
            return [nums[i], diff]
        }
        m.set(nums[i], i)
    }
}

findTargetMap(nums, 26)
// 2
function checkBracket(input) {
    if (input === '') return false
    const array = []
    const left = ['(', '[', '{']
    const right = [')', ']', '}']
    for (let i=0; i<input.length;i++) {
        if (left.includes(input[i])) {
            array.push(input[i])
        }
        if (right.includes(input[i])) {
            let p = array.pop()
            let c = left[right.indexOf(input[i])]
            if (p == c) {

            } else {
                return false
            }
        }
    }
    if (array.length === 0) {
        return true
    } else {
        return false
    }
}

function mask(str, char='#') {
    if (str.length < 1) return str
    return char.repeat(str.length - 4) + str.slice(str.length - 4)
}
// 21 merge-two-sorted-lists



