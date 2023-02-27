/**
 * 节流普通写法
 */
const div1 = document.getElementById('div1')

// div1.addEventListener('drag', function (e) {
//     console.log(e.offsetX, e.offsetY)
// })

/**
 * 函数封装
 */

function throttle(fn, delay = 100) {
    let timer = null
    return function () {
        if (timer) {
            return
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}

div1.addEventListener('drag', throttle(function (e) {
    console.log(e.offsetX, e.offsetY)
}, 200))