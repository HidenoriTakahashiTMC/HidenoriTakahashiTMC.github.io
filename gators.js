

//イベントリスナー
const target = document.getElementsByClassName("plusButton");

target[0].addEventListener("click",gator);


const targetRiver = document.getElementById("makeImg2");

//関数を設定
function gator(){
    let numbersOfGators = document.getElementById('number').value;  //入力値をゲット
    let result ="";                         //空変数を用意
    // console.log(numbersOfGators)
    for(let i = 1;i<=numbersOfGators;i++){      //入力値だけループして繰り返す
        result+="🐊";           //[windows] +[.]　絵文字は文字として処理できる
    }
    targetRiver.textContent=result;
    // console.log(result)
}



