/*
==================
PASSWORD GENERATOR
==================

Name :_____________

[INSTRUCTIONS]

passGen adalah sebuah function yang menerima tiga parameter berupa firstName, email, dan age.
Function akan mengambil bagian-bagian dari ketiga parameter menjadi satu kesatuan string baru,
dengan ketentuan:

output: [3 huruf pertama dari firstName][Semua huruf sebelum simbol @ di email][age]

Jika firstName dibawah 3 huruf, hentikan function dan kembalikan string berupa 'NAME IS INVALID!'

[CONSTRAINTS]
Dilarang menggunakan sintaks .split(), .slice(), .splice(), .join(), .push(), dan .concat().
Soal ini hanya membutuhkan operasi string (mengakses index dari string tentunya diperbolehkan)!
Dilarang menggunakan segala bentuk regex (match, test, dan lain-lain)


[EXAMPLE]
passGen('john', 'hello@john.com', 25)

proses:

- 3 huruf pertama dari firstName: 'joh'
- semua huruf sebelum simbol @ di email: 'hello'
- age: 25

output: 'johhello25'

*/

/* EXPLAIN YOUR LOGIC BELOW! (Required) */
// Tidak harus formal pseudocode, tapi bagaimana step by step logikanya
// Nilai tidak valid (0) jika logic dan code berbeda!
/*
Algoritma:
- buat fungsi 'passGen' dengan 3 parameter 'fistName', 'email' dan 'age'
- jika panjang 'firstName' kurang dari 3 maka return 'NAME IS INVALID'
- buat variable 'word1', 'word2' sebagai string dan 'isKeong' sebagai boolean
- set 'word1' sebagai angka ke 3 dari 'firstName';
- buat looping menggunakan var 'i' = 0 dengan kondisi i < panjang 'email'
- dalam proses looping :
  - buat kondisi jika 'email' dari index 'i' sama dengan '@' maka set 'isKeong' menjadi 'true'
  - buat kondisi jika 'email' dari index 'i' tidak sama dengan '@' dan tidak 'isKeong' maka 
    tambahkan 'email' index 'i' kedalam 'word2'
- setelah looping selesai return word1 + word2 + age;

*/

function passGen(firstName, email, age) {
  // only code here!
  if (firstName.length < 3 ){
    return 'NAME IS INVALID';
  }
  var word1 = firstName.slice(0,3);
  var word2 = '';
  var isKeong = false;
  for (var i = 0; i < email.length ; i++){
    if (email[i] === '@'){
      isKeong = true;
    }
    if (email[i] !== '@' && !isKeong){
      word2 = word2 + email[i];
    }
  }
  return word1+word2+age;
}

console.log(passGen('john', 'hello@gmail.com', 15)); // 'johhello15' 
console.log(passGen('mickey', 'mike@gmail.com', 1)); // 'micmike1'
console.log(passGen('a', 'hello@gmail.com', 15)); // 'NAME IS INVALID!'
console.log(passGen('rudy', 'rud@rudy.co.id', 22)); // 'rudrud22'
console.log(passGen('bejo', 'zetta@bejo.gov', 50)); // 'bejzetta50'