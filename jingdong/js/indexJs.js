let oBox = document.getElementById("box");
let aLi = document.getElementsByClassName("count")[0].getElementsByTagName("li");
let oImg = document.getElementsByClassName("list")[0];
let oLbtn = document.getElementsByClassName("sit-left")[0];
let oRbtn = document.getElementsByClassName("sit-right")[0];
let globalIndex = 0;
let dirction = 10;
let isRun = true;
let isTimer = true;


//切换照片  控制left属性
function changeImg(index) {
    isRun = false;

    if (index > globalIndex) {
        dirction = 10;
    } else {
        dirction = -10;
    }
    globalIndex = index;

    if (index == -1) {
        oImg.style.left = -(oImg.offsetWidth - 590) + "px";
        globalIndex = 7;
        index = 7;
    }
    if (index == 8) {
        globalIndex = 0;
    }

    for (var j = 0; j < aLi.length; j++) {
        aLi[j].className = "";
    }
    aLi[globalIndex].className = "active";
    let timer = setInterval(function () {
        if (oImg.offsetLeft == -index * 590) {
            clearInterval(timer);
            isRun = true;
            globalIndex = index;
            if (index == 8) {
                oImg.style.left = 0;
                globalIndex = 0
            }
        } else {
            oImg.style.left = oImg.offsetLeft - dirction + "px";
        }

    }, 1);


}

//实现鼠标放在数字按钮上的图片切换
for (let i = 0; i < aLi.length; i++) {
    aLi[i].index = i;
    aLi[i].onmouseover = function () {
        if (isRun) {
            changeImg(this.index);
        }
    }
}

//点击向左向右按钮时图片的切换
oLbtn.onclick = function () {
    if (isRun) {
        changeImg(globalIndex - 1);
    }

};
oRbtn.onclick = function () {
    if (isRun) {
        changeImg(globalIndex + 1);
    }

};

//自动切换
setInterval(function () {
    if (isRun && isTimer) {
        changeImg(globalIndex + 1);
    }
}, 2500);

//鼠标放在照片上时停止轮播
oBox.onmouseover = function () {
    isTimer = false;
}
oBox.onmouseout = function () {
    isTimer = true;
}