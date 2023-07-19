'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let actual;
let expected;
//=================================================================
function test(actual, expected) {
    console.log("-------TEST-------")
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("Yay! Test PASSED.");
      console.log("    actual: ", actual);
      console.log("  expected: ", expected);
    } else {
      console.error("Test FAILED. Keep trying!");
      console.log("    actual: ", actual);
      console.log("  expected: ", expected);
      console.trace();
    }
  }
//=================================================================

//ウォーミングアップ==========================
console.log("ウォーミングアップ--------------")
   /**
    * @param {Array<object>} 複数のオブジェクトが入った配列
    * @param {string} キー
    * @returns {Array<any>} 配列の中のオブジェクトから、第 2 引数と同じキーに対応する値だけを拾って（＝ pluck して）、配列に入れたもの
    * 複数のオブジェクトから、特定のキーの値だけを拾い集めて（= pluckして）
    * 新しい配列に入れて返す関数 pluck を定義してください。
    * 定義したら実際にテストをしてみましょう！
    */

   function pluck(arraysW,str){
    let newArray=[];
    for(const array of arraysW){
        newArray.push(array[str]);
    }
        return newArray;
   }
   // ここにコードを書きましょう。

   const arrayOfObjects = [  // オブジェクトの入った配列です。
     { a: 1, b: 2, c: 3 },
     { a: 4, b: 5, c: 6 },
     { a: 7, b: 8, c: 9 },
   ];

   test(pluck(arrayOfObjects, "a"), [1, 4, 7]);
//=================================================
//for...in
console.log("for ...in--------------")
const infoObject = {name:"Hana",dog:true,age:12};
for (const key in infoObject){
    const value = infoObject[key];
    console.log(value);
}

console.log("for ...in 配列--------------")
const cars = ["Toyota","Volvo","BMW","Honda"];
for ( const car of cars){
    console.log(car);
}

//基礎演習1================
console.log("基礎演習1-------------")


const hellos = {
    English: "Hello",
    Japanese: "Konnichiwa",
    German: "Hallo",
    Spanish: "Hola",
    Arabic: "Ahlan wa sahlan",
    Chinese: "Nihao",
  };

  /*
   * @returns {undefined} この関数は挨拶をコンソールに表示するだけで、返り値は必要ありません。
  ここに hellos という様々な言語での挨拶をまとめたオブジェクトがあります。このオブジェクトにある挨拶を順番にすべてコンソールに出力する関数 sayHellos を宣言してください。なお、この関数は返り値がないので直接テストはできません。今回はコンソールの表示を目で見て確認することでテストとしましょう。
   */

  function sayHellos(){
    for(const say in hellos){
        console.log(hellos[say]);
    }

  }


  sayHellos();　// 実際にこの関数を呼び出すと、以下のようにコンソールに表示されることを確認しましょう。
  // "Hello"
  // "Konnichiwa"
  // "Hallo"
  // "Hola"
  // "Ahlan wa sahlan"
  // "Nihao"


//基礎演習2================
console.log("基礎演習2-------------")


   /**
    * @param {object} ???
    * @returns {Array<string>} 与えられたオブジェクトのすべてのキーが入った配列
    */

   function getKeys(obj){
    const getObj = [];
    for(const key in obj){
        getObj.push(key);
    }
    return getObj;
}

   const object1 = { a: 1, b: 2, c: "hello" };
   const object2 = { 1: "a", 2: "b", hello: "c" };

   test(getKeys(object1), ["a", "b", "c"]);
   test(getKeys(object2), ["1", "2", "hello"]);

//基礎演習4================
console.log("確認演習4-------------")
const theFabFour = {
    bass: ["paul"],
    drums: ["ringo"],
    guitar: ["george", "john"],
    vocals: ["george", "john", "paul", "ringo"],
  };

  const theFifthBeatle = theFabFour;
  theFifthBeatle.guitar.push("beau");

  console.log(theFabFour); /*     bass: ["paul"],
                                  drums: ["ringo"],
                                  guitar: ["george", "john"],
                              vocals: ["george", "john", "paul", "ringo"],
                            */
  console.log(theFifthBeatle); /*     bass: ["paul"],
                                     drums: ["ringo"],
                                      guitar: ["george", "john","beau"],
                                    vocals: ["george", "john", "paul", "ringo"],
                                */
  console.log(theFabFour === theFifthBeatle); // true

  console.log(theFabFour.guitar); // ["george", "john","beau"]
  console.log(theFifthBeatle.guitar); // ["george", "john","beau"]
  console.log(theFabFour.guitar === theFifthBeatle.guitar); // true

  //基礎演習5================
console.log("確認演習5-------------")
let isHot = true;   // HOT:true
let isCold = !isHot; // HOT:ture  COLD:false

isHot = !isHot;// HOT:false  COLD:false

console.log(isHot); // false
console.log(isCold); // false
console.log(isHot === isCold); // true


  //基礎演習6================
  console.log("確認演習6-------------")

const easyAs = [
    ["a", "b", "c"],
    [1, 2, 3],
    ["do", "re"],
  ];
  const simpleAs = easyAs.slice();
  simpleAs[2].push("mi");

  console.log(easyAs); //    ["a", "b", "c"],  [1, 2, 3],["do", "re","mi"]

  console.log(simpleAs); //    ["a", "b", "c"],  [1, 2, 3],["do", "re","mi"]
  console.log(easyAs === simpleAs); // false

  console.log(easyAs[2]); // ["do", "re","mi"]
  console.log(simpleAs[2]); // ["do", "re","mi"]
console.log(typeof easyAs[2]);
  console.log(easyAs[2] === simpleAs[2]); // true
