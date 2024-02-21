// membuat objek angkot
function Angkot(sopir, rute, penumpang, kas) {
    this.sopir = sopir;
    this.rute = rute;
    this.penumpang = penumpang;
    this.kas = kas;
    this.orangTurun = [];
    this.ongkos = [];

    // method untuk ganti sopir
    this.gantiSopir = function (namaSopir) {
        this.sopir = namaSopir;
        console.log("nama sopir angkot ini sekarang adalah " + this.sopir);
    };

    //method tambah penumpang
    this.tambahPenumpang = function (namaPenumpang) {
        // keadaan penumpang kosong
        if (this.penumpang.length == 0) {
            this.penumpang.push(namaPenumpang);
            console.log("Penumpang dengan nama " + namaPenumpang + " sedang menaiki angkot.");
            return this.penumpang;
        } else {
            for (var i = 0; i < this.penumpang.length; i++) {
                if (this.penumpang[i] == "[KOSONG]") {
                    // cek apakah ada nama yang sama di bagian belakang
                    for (var a = this.penumpang.length - 1; a >= i; a--) {
                        if (this.penumpang[a] == namaPenumpang) {
                            console.log("penumpang dengan nama " + namaPenumpang + (" telah menaiki angkot"));
                            return this.penumpang;
                        } else if (a == i) { //--> penumpang akan menempati bangku kosong
                            this.penumpang[i] = namaPenumpang;
                            console.log("Penumpang dengan nama " + namaPenumpang + " sedang menaiki angkot.");
                            return this.penumpang;
                        }
                    }
                } else if (this.penumpang[i] == namaPenumpang) { //--> mengecek jika ada nama yang sama di bagian depan
                    console.log("penumpang dengan nama " + namaPenumpang + (" telah menaiki angkot"));
                    return this.penumpang;
                } else if (i == this.penumpang.length - 1) { //--> mengecek jika angkot telah penuh
                    this.penumpang.push(namaPenumpang);
                    return this.penumpang;
                }
            }
        }
    }

    // method turun penumpang
    this.turunPenumpang = function (namaPenumpang, uang) {
        if (this.penumpang.length == 0) {
            console.log("Angkot masih kosong");
            return this.penumpang;
        } else {
            for (var i = 0; i < this.penumpang.length; i++) {
                if (this.penumpang[i] == namaPenumpang && i != this.penumpang.length - 1) { //--> jika penumpang yang turun bukan yang terujung
                    this.penumpang[i] = "[KOSONG]";
                    this.kas += uang;
                    this.orangTurun.push(namaPenumpang);
                    this.ongkos.push(uang);
                    console.log("penumpang dengan nama " + namaPenumpang + " telah turun dari angkot dan membayar ongkos sebesar " + uang + ".");
                    return this.penumpang;
                } else if (this.penumpang[i] == namaPenumpang && i == this.penumpang.length - 1) { //--> jika penumpang yang turun terujung
                    this.penumpang.pop();
                    // mengecek apakah ada [KOSONG] di elemen terakhir
                    for (var k = this.penumpang.length - 1; this.penumpang[k] === "[KOSONG]"; k--) {
                        this.penumpang.pop();
                    };
                    this.kas += uang;
                    this.orangTurun.push(namaPenumpang);
                    this.ongkos.push(uang);
                    console.log("penumpang dengan nama " + namaPenumpang + " telah turun dari angkot dan membayar ongkos sebesar " + uang + ".");
                    return this.penumpang;
                } else if (i == this.penumpang.length - 1) {
                    console.log("penumpang dengan nama " + namaPenumpang + " tidak ada di angkot.");
                    return this.penumpang;
                }
            }
        }
    }

    // method pengelolaan kas 
    this.logKas = function () {
        for (var i = 0; i < this.orangTurun.length; i++) {
            var k = i;
            console.log(this.orangTurun[i] + " = Rp." + this.ongkos[k] + ",-");
        }
        console.log("\nMaka total kas angkot ini adalah sebesar Rp." + this.kas + ",-");
    }
}

var angkot1 = new Angkot("kenzo Sebastian", ["Pasarrebo", "Depok"], [], 0);
var angkot2 = new Angkot("budi", ["Cibubur", "Kp. Rambutan"], [], 0);