// 21 merge-two-sorted-lists

function ListNode() {
    this.value = ''
    this.next = null
}
var l1 = {
    value: 3,
    next: {
        value: 4,
        next: {
            value: 9,
            next: null
        }
    }
}
var l2 = {
    value: 1,
    next: {
        value: 5,
        next: {
            value: 8,
            next: null
        }
    }
}

function mergeList(l1, l2) {
    if (l1 === null) return l2
    if (l2 === null) return l1
    if (l1.value < l2.value) {
        l1.next = mergeList(l1.next, l2)
        return l1
    } else {
        l2.next = mergeList(l1, l2.next)
        return l2
    }
}

// 26 remove-duplicates-from-sorted-array
var nums = [0,0,1,1,1,2,2,3,3,4]


function removeDuplicates(nums) {
    var len = 0
    var str = null
    for (i=0; i<nums.length; i++) {
        if (nums[i] ===  str) continue
        len ++ 
        str = nums[i]
    }
    return len
}
function removeDuplicatesPoint(nums) {
    var len = 0
    for (i=0; i<nums.length; i++) {
        if (nums[i] ===  nums[len]) continue
        len ++ 
        nums[len] = nums[i]
    }
    return len + 1
}

// 88.merge-sorted-array
var nums1 = [1,2,3,0,0,0]
var nums2 = [2,5,6]

function sortArray(nums1, nums2) {
    nums1 = nums1.concat(nums2)
    nums1.sort()
}

// 0101.symmetric-tree
