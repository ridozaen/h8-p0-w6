/*
=============
UNIQUE FINDER
=============

Name :_____________

[INSTRUCTIONS]

uniqueFinder adalah sebuah function yang menerima satu parameter berupa kalimat.
Function akan mereturn array yang berisi setiap kata yang ditemukan dalam kalimat.
Tidak boleh ada kata yang berulang, dan besar kecil dari kata tidak dianggap.
Sehingga, Hello dan HELLO di anggap kata yang sama.

Function harus mereturn string "NO WORD" jika di kalimat tersebut tidak ditemukan kata apapun.

[CONSTRAINTS]
Tidak ada batasan untuk soal ini.


[EXAMPLE]
uniqueFinder('saya dan SAYA suka makan nasi')
kata unik: saya, dan, suka, makan, nasi
output: ['saya', 'dan', 'suka', 'makan', 'nasi']

*/

/* EXPLAIN YOUR LOGIC BELOW! (Required) */
// Tidak harus formal pseudocode, tapi bagaimana step by step logikanya
// Nilai tidak valid (0) jika logic dan code berbeda!
/*

Algoritma:
- buat fungsi uniqefinder dengan satu parameter 'sentence'
- split (pisahkan) sentence dengan spasi dan masukan kedalam array 'arrKata'
- buat kondisi jika sentence kosong (empty) return 'NO WORDS'
- lakukan looping dengan pengulangan antara i = 0 sampai panjang dari 'arrKata'
- didalam proses looping lakukan looping kembali dengan kondisi antara j = 0 sampai panjang dari 'arrKata'
- didalam proses looping kedua buat kondisi :
  - jika 'arrKata' index 'i' sama dengan 'arrKata' index 'j' dan 'i' tidak sama dengan 'j' maka, 
    remove/splice 'arrKata' indek ke 'j' .
- setelah semua looping selesai return 'arrKata';

function uniqueFinder(sentence) {
  // only code here!
  if (sentence.length < 1) return 'NO WORDS';
  let arr = sentence.split(' ');
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i].toLowerCase()) === -1 ){
    unique.push(arr[i]);
    }
  }
  return unique;
}

*/

function uniqueFinder(sentence) {
  var arrKata = sentence.split(' ');
  var newArr = [];
  if (!sentence){
    return "No Words";
  }
  for (var i=0; i < arrKata.length; i++){
    for (var j=0; j < arrKata.length; j++){
      if (arrKata[i].toLowerCase() === arrKata[j].toLowerCase() && i !== j){
        // console.log(arrKata[i],arrKata[j]);
        arrKata.splice(j,1);
        // console.log(arrKata);
      }
    }
  }
  return arrKata;
}

console.log(uniqueFinder('hello black dragon and hello red dragon')); // ['hello', 'black', 'dragon', 'and', 'red']
console.log(uniqueFinder('hello HELLo hEllO hlloe')); // ['hello', 'hlloe']
console.log(uniqueFinder('john is coding and he is coding')); // ['john', 'is', 'coding', 'and', 'he']
console.log(uniqueFinder('blue blue red blue violet red violet')); // ['blue', 'red', 'violet']
console.log(uniqueFinder('')); // 'NO WORDS'
