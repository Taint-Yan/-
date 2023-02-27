/**
 * 普通防抖函数
 */
const input1 = document.getElementById('input1')

// input1.addEventListener('keyup', function () {
//     let timer = null
//     if (timer) {
//         clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//         console.log(input1.value)
//         timer = null
//     }, 500)

// })

/**
 * 封装防抖函数
 */

function debounce(fn, delay = 500) {
    let timer = null
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}

input1.addEventListener('keyup', debounce(function () {
    console.log(input1.value)
}, 1000))