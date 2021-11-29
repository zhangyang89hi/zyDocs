/**
 * 斐波那契数列
 * @param {number} n 
 * @returns 
 */
function fif(n=0) {
    let result = {}

    function fi(m) {
        if (m < 0 ) {
            throw('m > 0')
        } else if (m === 0) {
            return 0
        } else if (m === 1) {
            return 1
        }
        if (result[m]) return result[m]
        else {
            result[m] = fi(m-1) + fi(m-2)
            return result[m]
        }
    }
    return fi(n)
}

/**
 * 数组去重，扁平化，最值
 */
function flat() {

}


/**
 * 合并两个有序数组
 */
var nums1 = [1,2,3], m = 3
var nums2 = [2,5,6], n = 3

function mergeOrder(nums1, nums2) {
    const result = []
    const m = nums1.length;
    const n = nums2.length;
    for (var i=0, j=0; i<m, j<n;) {
        if (nums1[i] < nums2[j]) {
            result.push(nums1[i++]);
        } else {
            result.push(nums2[j++]);
        }
    }
    if (i<m) {
        while(i < m) {
            result.push(nums1[i++])
        }   
    } 
    if (j<n) {
        while(j < n) {
            result.push(nums2[j++])
        }
    }
    return result
}

mergeOrder([2],[1])


/**
 * 归并排序
 */

function mergeSort(nums) {

}
/**
 * 选择排序
 */
function selectSort(nums) {

}

/**
 * 冒泡排序
 */

function bubbleSort(nums) {
    let len = nums.length;
    while (len--) {
        for (let i=0; i<len; i++) {
            if (nums[i] > nums[i+1]) swap(nums, i, i+1);
        }
    }
    function swap(nums, a, b) {
        if (nums[a] > nums[b]) {
            let s = nums[a];
            nums[a] = nums[b];
            nums[b] = s;
        }
    }
    return nums
}

/**
 * 快速排序
 */
 function quickSort(nums) {
    if (nums.length <= 1) return nums
    if (nums.length == 2) {
        if (nums[0] > nums[1]) {
            [nums[0], nums[1]] = [nums[1], nums[0]]
        }
        return nums
    }
    const index = Math.floor(nums.length/2)
    const value = nums.splice(index, 1)[0]

    const left = [], right = [];
    for (let i=0; i<nums.length; i++) {
        if (nums[i] < value) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }
    return quickSort(left).concat([value], quickSort(right))
}

/**
 * 二分查找算法
 * @param {*} arr 
 * @param {*} low 
 * @param {*} high 
 * @param {*} key 
 * @returns 
 */
function binarySearch(arr, low, high, key) {
   if(low - high) {
     return -1;
   }
   var mid = parseInt((high + low) / 2);
   if(arr[mid] === key) {
      return mid;
   } else if (arr[mid] > key) {
      return binarySearch(arr, low, mid - 1, key)
   } else if ( arr[min] < key ) {
      return binarySearch(arr, mid + 1, high, key);
   }
}

/**
 * 数据转为树结构
 */
 function convertTree() {
    const input = [
        {
            id: 0,
            fid: null,
            name: 'root',
            value: 'html'
        },
        {
            id: 1,
            fid: 0,
            name: 'head',
            value: 'head'
        },
        {
            id: 2,
            fid: 0,
            name: 'body',
            value: 'body'
        },
        {
            id: 3,
            fid: 0,
            name: 'script',
            value: 'script'
        },
        {
            id: 4,
            fid: 0,
            name: 'style',
            value: 'style'
        },
        {
            id: 5,
            fid: 2,
            name: 'div',
            value: 'div'
        }]
    const map = {};
    const result = [];
    var doms = null

    input.forEach((item) => {
        if (!map[item.id]) {
            map[item.id] = item
            item.children = []
        }
    })
    input.forEach((item) => {
        if (map[item.fid]) {
            map[item.fid].children.push(item)
        
        } else {
            result.push(item)
        }
    })
    console.log(result)

    const tree = document.getElementById("tree");
    function createLi(data) {
        const fid = `d${data.fatherId}`;
        const div = document.getElementById(fid);

        const treeItem = document.createElement("div");
        treeItem.id = `d${data.id}`;
        treeItem.className = "treeItem";
        treeItem.innerHTML = data.name;
        div.appendChild(treeItem);

        if (data.children) {
            data.children.forEach(d => {
                createLi(d);
            });
        }
    }
    result.forEach(v => {
        createLi(v);
    })
}

/**
 * 树，二叉树
 */

//封装二叉搜索树
function BinarySearchTree(){
    //属性
    this.root = null
}
//节点内部类
function Node(key){
    this.key = key
    this.left = null
    this.right = null
}
BinarySearchTree.prototype.insert = function(key){
    //1.根据key创建节点
    let newNode = new Node(key)
    //2.判断根节点是否存在
    if (this.root == null) {
        this.root = newNode
        //根节点存在时
    } else {
        this.insertNode(this.root, newNode)
    }
}
BinarySearchTree.prototype.insertNode = function(node, newNode) {
    if (newNode.key < node.key) {
        node.left ? this.insertNode(node.left, newNode) : node.left = newNode;
    } else {
        node.right ? this.insertNode(node.right, newNode) : node.right = newNode;
    }
}

// 中序遍历；左中右；从小到大的排序
BinarySearchTree.prototype.midTraversal = function(handler) {
    this.midTraversalNode(this.root, handler)
}
BinarySearchTree.prototype.midTraversalNode = function(node, handler) {
    if (node) {
        this.midTraversalNode(node.left, handler);
        handler(node.key)
        this.midTraversalNode(node.right, handler);
    }
}
// 先序遍历；中左右；
BinarySearchTree.prototype.preTraversal = function(handler) {
    this.preTraversalNode(this.root, handler)
}
BinarySearchTree.prototype.preTraversalNode = function(node, handler) {
    if (node) {
        handler(node.key)
        this.preTraversalNode(node.left, handler);
        this.preTraversalNode(node.right, handler);
    }
}
// 后序遍历；左右中
BinarySearchTree.prototype.backTraversal = function(handler) {
    this.backTraversalNode(this.root, handler)
}
BinarySearchTree.prototype.backTraversalNode = function(node, handler) {
    if (node) {
        this.backTraversalNode(node.left, handler);
        this.backTraversalNode(node.right, handler);
        handler(node.key)
    }
}
// 最小最大值
BinarySearchTree.prototype.min = function() {
    let node = this.root;
    while(node.left) {
        node = node.left 
    }
    return node.key
}
BinarySearchTree.prototype.max = function() {
    let node = this.root;
    while(node.right) {
        node = node.right 
    }
    return node.key
}
// 查找特定值
BinarySearchTree.prototype.search = function(key) {
    let node = this.root;
    while(node) {
        if (node.key === key) return true
        if (node.key > key) {
            node = node.left
        } else {
            node = node.right
        }
    }
    return false
}

// 删除节点
BinarySearchTree.prototype.remove = function(key) {
    
}