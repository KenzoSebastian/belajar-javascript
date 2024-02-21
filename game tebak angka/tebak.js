alert("SELAMAT DATANG di permainan TEBAK ANGKA");
var main = confirm(" ----------------------------------------RULES----------------------------------------\n1.Anda akan menebak angka yang diberikan oleh sistem dengan range 1 - 10!\n2.Anda akan diberikan 3 kesempatan untuk menebak dengan benar.\n3.Jika tebakan anda salah pada kesempatan pertama dan kedua, maka sistem akan memberikan Clue Petunjuk untuk angka yang ditebak.\n4.Jika setelah 3 kesempatan anda belum bisa menebak dengan benar, maka anda dinyatakan kalah!\n\n\nApakah ingin bermain ? ");

while (main) {
    for (var i = 3; i > 0; i--) {
        alert("nyawa anda tersisa " + i + " sekarang")
        // angka player
        var p = prompt("masukan angka anda dari 1-10 :");


        // cek apakah inputan user antara 1-10
        while (p > 10) {
            alert("masukan angka hanya dari 1 sampai 10");
            p = prompt("masukan angka anda dari 1-10 :");
        }

        // tebakan angka dari system
        var tebakan = Math.floor(Math.random() * 10) + 1;

        //clue 
        if (p == tebakan) {
            alert("SELAMAT!!, Anda menebak dengan BENAR!!");
            i = 1;
        } else if (p > tebakan) {
            alert("Angka yang anda masukan masih terlalu besar!!, yukk, tebak lagi!");
        } else if (p < tebakan) {
            alert("Angka yang anda masukan masih terlalu kecil!!, yukk, tebak lagi!");
        } else {
            alert("Anda memasukan huruf?? cobalah untuk memasukkan angka!");
        }
    }

    // hasil
    var hasil = (p == tebakan) ? "MENANG!!" : "KALAH!!";
    alert("Angka tebakan = " + tebakan + ", sedangkan Angka terakhir anda = " + p + ".\nMaka Anda dinyatakan " + hasil);

    // ingin main lagi??
    main = confirm("ingin bermain lagi?");
}

alert("TERIMA KASIH!!!");