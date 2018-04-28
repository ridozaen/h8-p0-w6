/* Encrypt me
    Kamu adalah seorang agen rahasia yang ingin mengirimkan pesan ke partnermu,untuk menmbuat kode yang kamu kirim tetap konfidental,
    kamu harus mengikuti sebuah kamus yang dimiliki oleh H8BI (Hacktiv8 Bureau of Investigation)

  Berikut adalah kamus huruf dari HBI
  huruf biasa abcdefghijklmnopqrstuvwxyz
  huruf H8BI  !@#$%^&*()-+1234567890[]{}

  Buatlah sebuah function yang mentranslate kata kata biasa, menjadi kata kata ter enkripsi menggunakan kamus H8BI!

  Note:
  - Selain karakter huruf biasa maka tidak akan di-translate

  Contoh 1:
  encrypt(dimitri) akan menghasilkan => $(1(86(

  Contoh 2:
  encrypt(@wtian) akan menghasilkan => @[8(!2

  Selamat berjuang, agen rahasia..

  RULES:
  ------
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE, jika tidak ada maka dianggap tidak mengerjakan
  - DILARANG MENGGUNAKAN BUILT IN FUNCTION .indexOf !

  Algoritma:

  - buat Function "encrypt" dengan 1 parameter "input"
  - buat variable constant "abjad" dengan nilai 'a' sampai 'z'
  - buat variable "H8BI" dengan nilai '!@#$%^&*()-+1234567890[]{}'
  - buat variable "encrypt" dengan nilai kosong
  - buat looping dengan kondisi 'i' = 0 sampai panjang dari "input"
  - didalam looping perama buat variable 'isFound' dengan nilai boolean false
  - buat looping kedua dengan kondisi 'j' = 0 sampai panjang dari "abjad" 
  - didalam looping buat kondisi :
    - jika "input" index "i" sama dengan "abjad" index ke "j" maka,
    - masukan hurup H8BI indek ke "j" kedalam variable "encrypt"
  - setelah looping kedua selesai, buat kondisi 
    - jika "isFound" sama dengan false maka,
    - masukan "input" index ke "i" ke dalam variable "encrypt"
  - setelah looping pertama selesai return nilai variable "encrypt"

*/
function encrypt(input) {
  const abjad = 'abcdefghijklmnopqrstuvwxyz'
  const H8BI = '!@#$%^&*()-+1234567890[]{}';
  var encrypt = ''
  for (var i = 0; i < input.length; i++){
    var isFound = false;
    for (var j = 0; j < abjad.length; j++){
      if (input[i] === abjad[j]){
        encrypt = encrypt + H8BI[j];
        isFound = true;
      }
    }
    if (!isFound){
      encrypt = encrypt + input[i];
    }
  }
  return encrypt;
}

console.log(encrypt('dimitri')) // $(1(86(
console.log(encrypt('irsyah mardiah')) //(67{!* 1!6$(!*
console.log(encrypt('dimitr€€')) // $(1(86€€
console.log(encrypt('d!mas')) // $!1!7
console.log(encrypt('@wtian')) // @[8(!2
