function get(arr, l) {
    let r = Math.floor(Math.random() *30 + 2);
    if (l===1){ 
        arr[l-1] = r ; 
        return arr
    } 
    if(get(arr, l-1).includes(r)) {
        get(arr, l)
        return arr
    } else {
        arr[l-1] = r
        return arr
    }
}


// tree
class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(key) {
        const newNode = new Node(key)
        const insertNode = (node, newNode) => {
            if (newNode.key < node.key) {
                if (!node.left) {
                    node.left = newNode
                } else {
                    insertNode(node.left, newNode)
                }
            } else {
                if (!node.right) {
                    node.right = newNode
                } else {
                    insertNode(node.right, newNode)
                }
            }
        }
        if (!this.root) {
            this.root = newNode
        } else {
            insertNode(this.root, newNode)
        }
    }
}
const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
console.dir(tree)

// 快速排序
var x = [3, 5, 12, 456, 1, 34, 6, 9, 2, 67, 0, 4, 38, 84, 143, 7, 67, 34]
function findK(nums, low, height, k) {
    if (low > height) return false
    if (low === height) return nums[low]
    function swap(nums,a,b) {var s= nums[a];nums[a]=nums[b];nums[b]=s};
    let i=low;
    let j=low;
    while(j<height) {
        if (nums[j]<nums[height]) {
            swap(nums, i++, j)
        }
        j++;
    }
    swap(nums, i, j)
    console.log("findK: ", i, '--',nums[i])
    if (i+1-low===k) {
        return nums[i]
    } else if(i+1-low<k) {  
        return findK(nums, i+1, height, k-i-1)
    } else if(i+1-low>k) {
        return findK(nums, low, i-1, k)
    }
}
