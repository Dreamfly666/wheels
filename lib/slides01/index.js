//  轮播图v1.0版本 ---基本原理非常简陋
window.onload = function () {
    var container = document.getElementById('container')
    var list = document.getElementById('list')
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev')
    var next = document.getElementById('next')
    var index = 1
    var animted = false  // 保存正在执行的动画变量
    var timer
    function showButton() {
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == 'on') {
                buttons[i].className = ''
                break;
            }
        }
        buttons[index - 1].className = 'on'
    }
    next.onclick = function () {
        if (index == 4) {
            index = 1
        } else {
            index += 1
        }
        showButton()
        if(!animted){
            animate(-600)
        }
    }
    prev.onclick = function () {
        if (index == 1) {
            index = 4
        } else {
            index -= 1
        }
        showButton()
        if(!animted){
            animate(600)
        }
    }

    function animate(offset) {
        animted = true
        // 目标newLeft
        var newLeft = parseInt(list.style.left) + offset
        var time = 1000 // 位移总时间
        var interval = 10 // 位移间隔时间
        var speed = offset / (time / interval) // 每次位移量
        function go() {
            if ((speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 && parseInt(list.style.left) < newLeft)) {
                list.style.left = parseInt(list.style.left) + speed + 'px'
                setTimeout(go,interval)
            } else {
                animted = false
                list.style.left = newLeft + 'px'
                if (newLeft > -600) {
                    list.style.left = -3000 + 'px'
                }
                if (newLeft < -2400) {
                    list.style.left = -600 + 'px'
                }
            }
        }
        go()
    }
    
    function play(){
        timer = setInterval(function(){
          next.click()  
        },3000)
    }
    function stop(){
        clearInterval(timer)
    }
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            if (this.className == 'on') {
                return
            }
            var myIndex = parseInt(this.getAttribute('index'))
            var offset = -600 * (myIndex - index)
            aniamte(offset)
            index = myIndex
            showButton()
        }
    }
    container.onmouseover = stop
    container.onmouseout = play
    play()
}