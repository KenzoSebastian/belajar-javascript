// permainan suwit gunting batu kertas

alert("Selamat Datang di permainan Suwit gunting, batu, kertas!!")
alert("Rules of the Game :\n1. Kamu akan memilih pilihanmu sendiri (gunting/batu/kertas)\n2. Komputer akan memilih pilihannya juga secara random\n3. Maka nanti akan tampil hasil pemenangnya di setiap akhir permainan")
var main = confirm("Apakah kamu ingin bermain?");
var nama = "Guess";

if (main == true) {
    nama = prompt("Haii, kenalan dulu yuk!, siapa nama mu?? ");
} else {
    alert("Terima Kasih!! " + nama);
}
    
while (main) {
    // pilihan player
    var p = prompt("haii " + nama + "!!, yuk tentukan pilihan mu!! (gunting, batu, kertas)");

    // pilihan komputer
    var kom = Math.random();

    if (kom < 0.33) {
        kom = "gunting";
    } else if (kom >= 0.33 && kom <= 0.66) {
        kom = "batu";
    } else {
        kom = "kertas";
    }

    // rules 
    var hasil = ""; 

    if (p == kom) {
        hasil = "SERI!!";
    } else if (p == "gunting") {
        hasil = (kom == "kertas") ? "MENANG!!" : "KALAH!!";
    } else if (p == "batu") {
        hasil = (kom == "gunting") ? "MENANG!!" : "KALAH!!";
    } else if (p == "kertas") {
        hasil = (kom == "batu") ? "MENANG!!" : "KALAH!!";
    } else {
        hasil = "tidak bisa ditentukan karena pilihan yang kamu masukan tidak sesuai!!";
    }

    // eksekusi 
    alert("Pilihan kamu adalah " + p + " ,sedangkan komputer memilih " + kom + ". Maka kamu dinyatakan " + hasil);

    main = confirm(nama + " ingin bermain lagi?");
}

if (nama !== "Guess") {
    alert("Terima Kasih!! " + nama);
}