const arr = [10, 20, 30, 40]

// pop删除数组最后一项，不用传值。返回删除的一项数据
// const popRes = arr.pop()
// console.log(popRes, arr)

// push  向数组最后一位添加数据，返回添加之后的数组长度length
// const pushRes = arr.push(50)
// console.log(pushRes, arr)

// unshift 向数组最前面添加数据，返回添加之后数组的长度length
// const unshiftRes = arr.unshift(5)
// console.log(unshiftRes, arr)

// shift 删除数组第一项，不用传值，返回删除的一项数据
// const shiftRes = arr.shift()
// console.log(shiftRes, arr)


// 纯函数：1.不改变源数组(没有副作用)；2.返回一个数组
const arr1 = [20, 30, 40, 50]
// concat新建一个数组，不改变源数组
// const arr2 = arr1.concat([60, 70, 80])

// map 遍历出来一个新的值，源数组不会改变
// const arr2 = arr1.map(num => num * 10)

// filter 过滤筛选的结果
// const arr2 = arr1.filter(num => num > 30)

// slice 复制一个新的数组，源数组不改变
const arr2 = arr1.slice()

 // 非纯函数
 // push pop shift unshift
 // forEach
 // some every
 // reduce
