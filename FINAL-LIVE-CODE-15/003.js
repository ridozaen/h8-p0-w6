/*
==================================
Array Mastery: Shortest Word
==================================

Nama:________

[INSTRUCTION]
Disediakan sebuah kalimat. Function shortestWords akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan jumlah huruf paling sedikit dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan jumlah kata yang paling sedikit tersebut.

[EXAMPLE]
input (kalimat): Do you want to become a great coder.
panjang kata paling sedikit dalam kalimat: 1
output: ['a']

input (kalimat): You dont know what you have until you lose it!.
panjang kata paling sedikit dalam kalimat: 3
output: ['you', 'it!']

[CONSTRAINTS]
Dilarang menggunakan function .map/.filter/.reduce!
Diarang menggunakan regex!

/* EXPLAIN YOUR LOGIC BELOW! (Required) 
Alogritma:

- buat fungsi shortestwords menggunakan 1 parameter 'words'
- split words dengan spasi dan simpan hasilnya kedalam array 'arrWords'
- buat looping dengan kondisi 'i' = 0 sampai panjang dari 'arrWords'
- dalam looping :
  - buat kondisi untuk menentukan panjang kata yang paling kecil (Min) dari 'arrWords'
  - simpan hasilnya kedalam variable 'minWords'
- buat looping dengan kondisi 'j' = 0 sampai panjang dari 'arrWords'
- dalam looping :
  - buat kondisi apakan panjang dari 'arrwords' index ke 'j' sama dengan panjang 'minWords'
  - jika sama masukan kedalam array dengan variable 'arrMin'
- buat looping kembali untuk meremove isi 'arrMin' yang duplikat
- didalam looping:
  - buat kondisi untuk mengkompare isi array apakah sama
  - jika sama maka remove dengan menggunakan build in splice untuk meremove salah satu yg duplicate.

function shortestWords(words) {
  // Code here
  let arr = words.split(' ');
  let shortest = arr[0].length;
  let shortestArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < shortest) shortest = arr[i].length;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === shortest && shortestArr.indexOf(arr[i].toLowerCase()) === -1) {
      shortestArr.push(arr[i].toLowerCase());
    }
  }
  
  for (let i = 0; i < shortestArr.length; i++) {
    if(shortestArr[i] === "i") shortestArr[i] = "I";
  }
  return shortestArr;
}



*/
// Tidak harus formal pseudocode, tapi bagaimana step by step logikanya
// Nilai tidak valid (0) jika logic dan code berbeda!

function shortestWords(words) {
  // Code here
  var arrWords = words.split(' ');
  var minWords = 0
  for (var i = 0; i < arrWords.length; i++){
    if (minWords > arrWords[i].length || minWords === 0){
      minWords = arrWords[i].length;
    }
  }
  var arrMin = [];
  for (var j = 0; j < arrWords.length; j++){
    if (arrWords[j].length === minWords && arrMin.indexOf(arrWords[j].toLowerCase()) === -1){
      arrMin.push(arrWords[j].toLowerCase());
    }
  }

  // for (var k =0; k < arrMin.length; k++){
  //   for (var l=0; l < arrMin.length; l++){
  //     if (arrMin[k].toLowerCase() == arrMin[l].toLowerCase() && k !==l){
  //       arrMin.splice(l,1);
  //     }
  //   } 
  // }

  return arrMin;
}

console.log(shortestWords('Do you want to become a great coder ?')); // ['a', '?']
console.log(shortestWords('You dont know what you have until you lose it!')); // ['you', 'it!']
console.log(shortestWords('I am diligent')); // ['I']