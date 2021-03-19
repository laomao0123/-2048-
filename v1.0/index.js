const oLis = document.querySelectorAll('#main li')
// 判断数字大小及是否结束
const judge = () => {
    oLis.forEach(li => {
        if (li.innerHTML == '0') {
            li.setAttribute('class', 'zero')
        } else if (li.innerHTML == '2') {
            li.setAttribute('class', 'one')
        } else if (li.innerHTML == '4') {
            li.setAttribute('class', 'two')
        } else if (li.innerHTML == '8') {
            li.setAttribute('class', 'three')
        } else if (li.innerHTML == '16') {
            li.setAttribute('class', 'four')
        } else if (li.innerHTML == '32') {
            li.setAttribute('class', 'five')
        } else if (li.innerHTML == '64') {
            li.setAttribute('class', 'six')
        } else if (li.innerHTML == '128') {
            li.setAttribute('class', 'seven')
        } else if (li.innerHTML == '256') {
            li.setAttribute('class', 'eight')
        } else if (li.innerHTML == '512') {
            li.setAttribute('class', 'nine')
        } else if (li.innerHTML == '1024') {
            li.setAttribute('class', 'ten')
        } else if (li.innerHTML == '2048') {
            li.setAttribute('class', 'eleven')
            if (window.confirm("你胜利了，是否继续")) {
                init()
            }
        }
    })
}
// 讲一个格子从0变成2
const add = () => {
    let x = Math.floor(Math.random() * 16)
    if (oLis[x].innerHTML == '0') {
        oLis[x].innerHTML = `${(Math.floor(Math.random() * 1.3) + 1) * 2}`
    } else {
        add()
    }
}
// 结束判断
const over = () => {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (data[i][j] == 0 || data[i][j] == data[i][j + 1] || data[i][j] == data[i + 1][j]) {
                return false
            }
        }
    }
    if (window.confirm("你胜利了，是否继续")) {
        init()
    }
}
// 组成4*4的坐标
const data = [
    [],
    [],
    [],
    []
];
const getData = () => {
    let a = 0
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            data[i].push(oLis[a].innerHTML)
            a++
        }
    }
}
// 把data中数据放回li里
const dataView = () => {
    let i = 0,
        j = 0,
        a = 0
    while (a < 16) {
        oLis[a].innerHTML = data[i][j]
        a++
        j++
        if (j = 4) {
            j = 0
            i++
        }
    }
}
// 事件
window.addEventListener('keyup', e => {
    // 留原始数据，用于判断是否有效操作
    const before = String(data)
    // 下
    if (e.key == 'ArrowDown') {
        for (let i = 0; i < 4; i++) {
            for (let j = 3; j >= 0; j--) {

            }
        }
    }
    // 判断是否有效移动
    if (String(data) != before) {
        dataView()
        add()
        judge()
        over()
    }
})
// 初始化游戏
const init = () => {
    add()
    add()
    judge()
    getData()
}
init()