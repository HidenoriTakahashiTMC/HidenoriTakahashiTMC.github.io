//マウスが来ると見え方が変わる
//マウスが来た時
function over(x) {
    x.style.backgroundColor = "yellow";
    x.style.color = "red";
    x.style.fontSize = "20px";
}
//マウスが離れた時
function leave(x) {
    x.style.backgroundColor = "white";
    x.style.color = "black";
    x.style.fontSize = "14px";
}

//判定を付けていく
//イベントリスナー
const target = document.getElementById("gtext1");
console.log(target)
target[0].addEventListener("click",result1);


// const targetRiver = document.getElementById("makeImg2");

//関数を設定
function result1(x){
    // let numbersOfGators = document.getElementById('number').value;  //入力値をゲット
    let result =target.textContent;                         //空変数を用意
    // console.log(numbersOfGators)
    // for(let i = 1;i<=numbersOfGators;i++){      //入力値だけループして繰り返す
    //     result+="🐊";           //[windows] +[.]　絵文字は文字として処理できる
    // }
    target.textContent=result + "A";
    // console.log(result)
}