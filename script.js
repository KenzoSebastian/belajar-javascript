// MATERI-MATERI JAVASCRIPT

//POPUP BOX pada JAVASCRIPT ---> video-16 series Javascript WPU

// TAMPILIN KE CONSOLE
// x = "luvvvvv"
// console.log("haiiii Kenzo dan tessa");
// console.log("haiiii Kenzo dan tessa jelek" + x);


// BISA MUNCULIN ALERT BERTUMPUK
// alert("tes sni sama gw aja ih, ngapain sama diko -_-");
// alert("lu harus sama gw!!!");
// alert("kuduuu!!!");
// alert("wajib pokoknya");
// alert("gw sayang bgt sama lu tes");


// ALERT DENGAN VAR, PROMPT ITU BUAT INPUT DATA SEDANGKAN CONFIRM ITU BUAT MASUKAN NILAI BOOLEAN
// var nama = prompt("masukan orang yang lu sayang :");
// confirm("loe yakin sayang sama dia?");
// alert("hmm... " + nama + " gw itu sayang bgt tau sama lu");


// APLIKASI JONES WKWKWKWKWK
// alert("Selamat datang di jasa nembak pacar instan");
// var nembak_lagi = true;

// while(nembak_lagi) {
//     var nama = prompt("masukan crush loe yang lu suka");
//     alert("kwkwkkkkkkww, loe di tolak broo sama " + nama + " nice try ya broo, semangatt");

//     nembak_lagi = confirm("hayooo, coba nembak lagii ga broo??");
// }
// alert("yahh.... emng loe udah di takdirkan jd jones bro wkwkwkwk...");


//---------------------------------------------------------------------------------------------------------------------
//Control Flow pada JAVASCRIPT ---> video-17 series Javascript WPU

//Normal Flow
// "apabila program kita memiliki lebih dari satu statement, maka statement tersebut akan dieksekusi dari atas ke bawah atau dari kiri ke kanan"
// contoh
// alert("halo");
// alert("nama");
// alert("saya");
// alert("kenzo");
// alert("sebastian");

// var angka = prompt("masukan angka :");
// alert("angka yang anda masukan adalah : " + angka);

//Control Flow membutuhkan pengulangan dan pengkondisian
//pengulangan (loop/ilterasi)
// sintax looping : for, while, do while

// pengkondisian/percabangan
// sintax pengkondisian : if, if...else, if..else if... else, switch


//---------------------------------------------------------------------------------------------------------------------------
//Pengulangan : WHILE pada JAVASCRIPT ---> video-18 series Javasript WPU

//while(kondisi) {
//     aksi
// }

// while(true){
//     console.log("hello world!")
// } --> infinite loop

// var ulang = true;
// while(ulang) {
//     console.log("hello world");
//     confirm("lagi?");
// };

// var nilaiAwal = 1;
// while(nilaiAwal <= 10){
//     console.log("hello world " + nilaiAwal + "x");
//     nilaiAwal++;
// }


//---------------------------------------------------------------------------------------------------------------------------
//Pengulangan : FOR pada JAVASCIPT ---> video-20 series Javasript WPU

// for (var nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++) {
//     console.log("hello world " + nilaiAwal + "x");
// }


//---------------------------------------------------------------------------------------------------------------------------
//Pengulangan : PENGKONDISIAN: IF ELSE pada JAVASCIPT ---> video-21 series Javasript WPU

// sintax dasar
// if (kondisi) {
    //     aksi
    // } else {
        //     aksi
// }


//---------------------------------------------------------------------------------------------------------------------------
//Pengulangan : PENGKONDISIAN: SWITCH pada JAVASCIPT ---> video-24 series Javasript WPU
// ada di yt lah mles gw ketik2


//---------------------------------------------------------------------------------------------------------------------------
// PENGULANGAN & PENGKONDISIAN bersarang pada JAVASCRIPT ---> video-24 series Javasript WPU

// console.log("-------Pengulangan & pengkondisian bersarang--------");

// console.log("--SEGITIGA 1--");
// var bintang = "";
// for (var i = 0; i <= 10; i++) {
//     for (var j = 0; j <= i; j++) {
//         bintang += "*";
//     }
//     bintang += "\n";
// }
// console.log(bintang);


// console.log("--SEGITIGA 2--");
// var bintang = "";
// for (var i = 10; i >= 0; i--) {
//     for (var j = 0; j <= i; j++) {
//         bintang += "*";
//     }
//     bintang += "\n";
// }
// console.log(bintang);


// console.log("--SEGITIGA 3--");
// var bintang = "";
// for (var i = 10; i >= 0; i--) {
//     for (var j = 0; j <= i; j++) {
//         bintang += " "
//     }

//     for (var k = 10; k >= i; k--) {
//         bintang += "*"
//     }
//     bintang += "\n";
// }
// console.log(bintang);


// console.log("--SEGITIGA 4--");
// var bintang = "";
// for (var i = 0; i <= 10; i++) {
//     for (var j = 0; j <= i; j++) {
//         bintang += " ";
//     }

//     for (var k = 10; k >= i; k--) {
//         bintang += "*";
//     }
//     bintang += "\n";
// }
// console.log(bintang);


// console.log("--SEGITIGA 5--");
// var bintang = "";
// for (var i = 0; i <= 10; i++) {
//     for (var j = 0; j <= i; j++) {
//         bintang += "*";
//     }
//     bintang += "\n";
// }
// for (var i = 10; i >= 0; i--) {
//     for (var j = 0; j < i; j++) {
//         bintang += "*";
//     }
//     bintang += "\n";
// }
// console.log(bintang);


// console.log("--SEGITIGA 6--");
// var bintang = "";
// for (var i = 10; i > 0; i--) {
//     for (var j = 0; j <= i; j++) {
//         bintang += " "
//     }

//     for (var k = 10; k >= i; k--) {
//         bintang += "*"
//     }
//     bintang += "\n";
// }
// for (var i = 0; i <= 10; i++) {
//     for (var j = 0; j <= i; j++) {
//         bintang += " ";
//     }

//     for (var k = 10; k >= i; k--) {
//         bintang += "*";
//     }
//     bintang += "\n";
// }
// console.log(bintang);


// console.log("--SEGITIGA 7--");
// var bintang = "";
// for (var i = 10; i > 0; i--) {
//     for (var j = 0; j <= i; j++) {
//         bintang += " ";
//     }

//     for (var k = 10; k >= i; k--) {
//         bintang += "*";
//     }

//     for (var l = 10; l > i; l--) {
//         bintang += "*";
//     }
//     bintang += "\n";
// }
// console.log(bintang);



// console.log("--SEGITIGA 8--");
// var bintang = "";
// for (var i = 0; i <= 10; i++) {
//     for (var j = 0; j <= i; j++) {
//         bintang += " ";
//     }

//     for (var k = 10; k >= i; k--) {
//         bintang += "*";
//     }

//     for (var l = 10; l > i; l--) {
//         bintang += "*";
//     }
//     bintang += "\n";
// }
// console.log(bintang);



// console.log("--SEGITIGA 9--");
// var bintang = "";
// for (var i = 10; i > 0; i--) {
//     for (var j = 0; j <= i; j++) {
//         bintang += " ";
//     }

//     for (var k = 10; k >= i; k--) {
//         bintang += "*";
//     }

//     for (var l = 10; l > i; l--) {
//         bintang += "*";
//     }
//     bintang += "\n";
// }
// for (var i = 0; i <= 10; i++) {
//     for (var j = 0; j <= i; j++) {
//         bintang += " ";
//     }

//     for (var k = 10; k >= i; k--) {
//         bintang += "*";
//     }

//     for (var l = 10; l > i; l--) {
//         bintang += "*";
//     }
//     bintang += "\n";
// }
// console.log(bintang);



//---------------------------------------------------------------------------------------------------------------------------
// FUNCTION pada JAVASCRIPT ---> video-27-33 series Javasript WPU
// Sebuah sub program / sub routine yang dapat "dipanggil" di bagian lain pada program

// kenapa harus pakai function ??
// Reusability (DRY : Do not Repeat Yourself), Dekomposisi, Modularitas

// kategori function :
// 1. Built-in Function --> ada di website w3school
// 2. User-Defined Function  --> fungsi yang di buat oleh user

// cara membuat function :
// 1. function declaration
// function jumlahDuaBilangan(a, b) {
//     var total;
//     total = a + b;

//     return total;
// }
// alert(jumlahDuaBilangan(1, 2));
// alert(jumlahDuaBilangan(6, 7));
// alert(jumlahDuaBilangan(12, 78));


// 2. function expression
// var jumlahDuaBilangan = function (a, b) {
//     var total;
//     total = a + b;

//     return total;
// }

// rekursif --> memanggil dirinya sendiri
// var fun = function (x) {
//     var b = x - 1;
//     if (b >= 0) {
//         console.log(b);
//         return fun(b);
//     }
// }
// fun(15);



//---------------------------------------------------------------------------------------------------------------------------
// ARRAY pada JAVASCRIPT ---> video-34-38 series Javasript WPU
// var array = ["saya", 19, true, "tessa"];
// console.log(array[3]); // index array pada JavaScript dimulai dari 0

// MANIPULASI ARRAY
// 1. menambah isi array
// var arr = [];
// arr[0] = "kenzo";
// arr[1] = "Sebastian";
// arr[2] = 19;

// console.log(arr);

// 2. menghapus isi Array
// var arr = ["kenzo", "Sebastian", 19];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi Array
// var arr = ["kenzo", "Sebastian", "tessa", "ivanna", "meyliana"];

// for (var i = 0; i < arr.length; i++) {
//     console.log("mahasiswa ke-" + (i + 1) + " : " + arr[i]);
// }


// Method pada Array
// var arr = ["kenzo", "Sebastian", "tessa", "ivanna", "meyliana"];
// 1. join
// console.log(arr.join(" - "));

// 2. push & pop --> elemen terakhir pada array
// arr.push("caca", "timothy"); --> mendorong masuk
// console.log(arr.join(" - "));
// arr.pop(); --> memecahkan / menghilangkan
// console.log(arr.join(" - "));

// 3. unshift & shift --> elemen pertama pada array
// arr.unshift("caca", "timothy"); --> menggeser kedalam
// console.log(arr.join(" - "));
// arr.shift(); --> mengeluarkan / menggeser keluar
// console.log(arr.join(" - "));

// 4. splice --> menyisipkan elemen di tengah-tengah
// namaArray.splice (indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2,...)
// arr.splice(2, 0, "Love", "very much");
// console.log(arr.join(" - "));
// arr.splice(2, 2, "Love", "very much");
// console.log(arr.join(" - "));

// 5. Slice --> memotong Array menjadi Array baru
// slice(indexAwal, indexAkhir-1);
// var arr = ["kenzo", "Sebastian", "tessa", "ivanna", "meyliana"];
// var arr2 = arr.slice(2, 4);
// console.log(arr.join(" - "));
// console.log(arr2.join(" - "));

// 6. forEach --> looping Array
// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var arr = ["kenzo", "Sebastian", "tessa", "ivanna", "meyliana"];

// for (var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// } --> looping biasa
;
// angka.forEach(function (e) {
//     console.log(e);
// }); // --> looping dengan menggunakan forEach

// arr.forEach(function (e, i) {
//     console.log("mahasiswa ke-" + (i+1) + " adalah : " + e)
// })

// 7. map --> mengembalikan Array
// var angka = [1, 2, 9, 6, 3, 8, 4];
// var angka2 = angka.map(function (e) {
//     return e * 2;
// });
// console.log(angka2.join(" - "));


// 8. sort
// var angka = [1, 2, 10, 9, 6, 3, 20, 8, 4];
// console.log(angka.join(" - "));
// angka.sort(function (a, b) {
//     return a - b;
// });
// console.log(angka.join(" - "));


// 9. filter --> menghasilkan lebih dari 1 nilai
// var angka = [1, 2, 10, 9, 6, 3, 20, 8, 4];
// var angka2 = angka.filter(function (e) {
//     return e > 5;
// })
// console.log(angka2.join(" - "));

// console.log(angka2.join(" - "));

// 10. find --> menghasilkan 1 nilai saja dan bukan array
// var angka = [1, 2, 10, 9, 6, 3, 20, 8, 4];
// var angka2 = angka.find(function (e) {
//     return e > 5;
// })
// console.log(angka2);



//---------------------------------------------------------------------------------------------------------------------------
// OBJECT pada JAVASCRIPT ---> video-41-44 series Javasript WPU

// var mhs = {
//     nama : "kenzo sebastian",
//     umur: 19,
//     ips: [4.00, 3.85, 4.0],
//     alamat : {
//         jalan : "Amber XII",
//         kota : "Depok",
//         provinsi : "jawa barat"
//     }
// }
// console.log(mhs.nama);
// console.log(mhs["nama"]); // --> bisa pake kurung siku juga
// console.log(mhs.umur);
// console.log(mhs.ips);
// console.log(mhs.ips[2]);
// console.log(mhs.alamat);
// console.log(mhs.alamat.jalan);
// console.log(mhs.alamat.kota);
// console.log(mhs.alamat.provinsi);

// CARA MEMBUAT OBJECT :
// 1. Object Literal --> kayak yang di atas
// var mhs1 = {
//     nama: "kenzo sebastian",
//     nrp: "043040023",
//     email: "kenz@gmail.com",
//     jurusan : "teknik informatika"
// }

// var mhs2 = {
//     nama: "tessa ivanna",
//     nrp: "0930098023",
//     email: "tesa@gmail.com",
//     jurusan : "psikologi"
// }

// console.log(mhs1);
// console.log(mhs2);

// 2. Function Declaration
// function buatObjectMahasiswa(nama, nrp, email, jurusan) {
//     var mhs = {};
//     mhs.nama = nama;
//     mhs.nrp = nrp;
//     mhs.email = email;
//     mhs.jurusan = jurusan;
//     return mhs;
// }

// var mhs3 = buatObjectMahasiswa("budi", "235679865", "budi@yahoo.com", "Teknik Pertanian")
// console.log(mhs3);

// 3. Constructor Function (keyword new)
// function Mahasiswa(nama, nrp, email, jurusan) {
//     // var this = {}; --> udah dibuat oleh js
//     this.nama = nama;
//     this.nrp = nrp;
//     this.email = email;
//     this.jurusan = jurusan;
//     // return this; --> udah dibuat oleh js
// }

// var mhs4 = new Mahasiswa("anton", "24699876", "antonGanteng@gmail.com", "Hukum")
// console.log(mhs4);

// 4. Object.create() --> nanti belajar nya setelah belajar prototipe


// KONSEP THIS


// var a = 10;
// console.log (window.a); // this === window
// console.log (this.a);

// membuat object
// cara 1 - function declaration
// function halo() {
//     console.log(this);
//     console.log("halo");
// }
// halo();
// this mengembalikan object global

// cara 2 - object literal
// var obj = {a : 10, nama : "kenzo"};
// obj.halo = function () {
//     console.log(this);
//     console.log("halo");
// }
// obj.halo();
// this mengembalikan object yang bersangkutan

// cara 3 - constructor
// function Halo() {
//     console.log(this);
//     console.log("halo");
// }
// var obj1 = new Halo(); // --> mengembalikan obj1
// this mengembalikan object yang baru dibuat
