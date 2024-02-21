var penumpang = [];

// function menambah penumpang
var tambahPenumpang = function (nama, penumpang) {
    // mengecek apakah penumpang kosong
    if (penumpang.length == 0) {
        penumpang.push(nama);
        console.log("\nAngkot behenti.\nPenumpang dengan nama " + nama + " sedang menaiki angkot.\nAngkot berjalan kembali dengan penumpang = " + penumpang.join(" - "));
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            // mengecek apakah ada kursi kosong
            if (penumpang[i] == "[KOSONG]") {
                // cek dulu dari belakang, ada yang nama nya sama tidak
                for (var k = penumpang.length - 1; k >= i; k--) {
                    if (penumpang[k] == nama) {
                        console.log("\nPenumpang dengan nama " + nama + " sudah menaiki angkot!");
                        return penumpang;
                    // kalau tidak ada baru "[KOSONG]" diganti nama
                    } else if (k == i) {
                        penumpang[i] = nama;
                        console.log("\nAngkot behenti.\nPenumpang dengan nama " + nama + " sedang menaiki angkot.\nAngkot berjalan kembali dengan penumpang = " + penumpang.join(" - "));
                        return penumpang;
                    }
                }  
            }else if (penumpang[i] == nama) { //-->mengecek kalau ada penumpang degan nama yang sama
                console.log("\nPenumpang dengan nama " + nama + " sudah menaiki angkot!");
                return penumpang;
            } else if (i == penumpang.length-1) { //--> mengecek apakah penumpang sudah penuh
                penumpang.push(nama);
                console.log("\nAngkot behenti.\nPenumpang dengan nama " + nama + " sedang menaiki angkot.\nAngkot berjalan kembali dengan penumpang = " + penumpang.join(" - "));
                return penumpang;
            }
        };
    };
};

var turunpenumpang = function (nama, penumpang) {
    // mengecek apakah ada penumpang di dalam angkot 
    if (penumpang.length == 0) {
        console.log("Angkot masih kosong")
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == nama && i != penumpang.length - 1) { //--> jika penumpang duduk di tengah
                penumpang[i] = "[KOSONG]";
                console.log("\nAngkot behenti.\nPenumpang dengan nama " + nama + " sedang turun dari angkot.\nAngkot berjalan kembali dengan penumpang = " + penumpang.join(" - "));
                return penumpang;
            } else if (penumpang[i] == nama && i == penumpang.length - 1) { //--> jika penumpang duduk di terakhir
                penumpang.pop();
                // mengecek apakah elemen terakhir == [KOSONG]
                for (var k = penumpang.length - 1; penumpang[k] === "[KOSONG]"; k--) {
                    penumpang.pop();
                }
                console.log("\nAngkot behenti.\nPenumpang dengan nama " + nama + " sedang turun dari angkot.\nAngkot berjalan kembali dengan penumpang = " + penumpang.join(" - "));
                return penumpang;
            } else if (i == penumpang.length - 1) { // --> jika tidak ada nama penumpang di angkot
                console.log("\ntidak ada penumpang dengan nama " + nama + " di angkot.")
                return penumpang;  
            }
           
        }
    }
    
}
