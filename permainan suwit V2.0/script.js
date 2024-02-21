
arrNama = [];
let ronde = 1;

let skorP = 0;
let skorC = 0;

playerFinal = [7, 8, 9];
compFinal = [1, 2, 3];

arrP = [];
arrC = [];

// function - function
const animasiHilang = (e) => {
    e.style.transform = "scale(0)";
}

const animasiMuncul = (e) => {
    e.style.transform = "scale(1)";
}

const animasiGeser = (e) => {
    e.style.transform = "translateX(0)"
}

const openingRonde = (hronde, hmundur, ronde) => {
    const w = new Date().getTime();
    arrHitung = [3, 2, 1, "Go!"];
    let i = 0;
    setInterval(() => {
        if (new Date().getTime() - w > 4500) {
            clearInterval;
            animasiHilang(hmundur.parentElement.parentElement);
            const judul = document.querySelector(".judul");
            animasiMuncul(judul);
            return;
        } else {
            animasiMuncul(hmundur.parentElement);
            hronde.innerHTML = `RONDE ${ronde}`;
            hmundur.innerHTML = arrHitung[i];
            i++;
        }
    }, 1000);
}

const buatRonde = () => {
    // buat elemen
    const heading = document.querySelector(".judul");

    const cov = document.createElement("div");
    const rond = document.createElement("div");
    const hRonde = document.createElement("h1");
    const hMundur = document.createElement("h2");

    cov.appendChild(rond);
    rond.classList.add("ronde");
    rond.appendChild(hRonde)
    rond.appendChild(hMundur);

    heading.parentElement.insertBefore(cov, heading);

    // munculin ronde
    if (ronde > 3) {
        const ket = document.querySelector(".hasil h2");
        if (arrP.length > arrC.length) {
            ket.innerHTML = `Kamu dinyatakan menang dengan perolehan nilai sebagai berikut :`;
        } else if (arrC.length > arrP.length) {
            ket.innerHTML = `Kamu dinyatakan kalah dengan perolehan nilai sebagai berikut :`;
        }
        const covFinal = document.querySelector(".final");
        animasiMuncul(covFinal);
        console.log("finish")
    } else if (ronde <= 3) {
        setTimeout(() => {
            cov.classList.add("cover");
        }, 300);
        openingRonde(hRonde, hMundur, ronde);
    
        cov.classList.remove("cover");
    }
}


const simpanHasil = (arrMenang, arrKalah, nama, arrhasil) => {
    alert(`Ronde ${ronde} dimenangkan oleh ${nama}`);
    arrhasil.push("heyyoo")

    arrMenang[ronde - 1] = "Menang";
    arrKalah[ronde - 1] = "Kalah";
    
    const elemPlayer = document.getElementsByClassName("player-poin")[ronde - 1];
    const elemComp = document.getElementsByClassName("comp-poin")[ronde - 1];
    
    elemPlayer.innerHTML = playerFinal[ronde - 1];
    elemComp.innerHTML = compFinal[ronde - 1];
}

// bagian depan
const start = document.getElementsByClassName("start")[0];
const input = document.getElementsByClassName("input")[0];

start.addEventListener("click", () => {
    animasiHilang(start);
    animasiGeser(input);
})



// bagian input 
const button = document.querySelector(".input button");
const ruleButton = document.querySelector(".rule button")

button.addEventListener("click", () => {
    const txtName = document.getElementById("name").value;
    const paf = document.createElement("p");
    const text = document.createTextNode("Nama wajib di isi!!");
    paf.appendChild(text);

    if (txtName == "") {
        button.parentElement.insertBefore(paf, button);
    } else {
        input.style.transform = "scale(.00000000000001)";
        animasiGeser(ruleButton.parentElement);

        const nama = document.querySelector(".area-player h2");
        nama.innerHTML = `${txtName} :`;
        arrNama.push(txtName);
        
        const namahasil = document.querySelector(".tNama");
        namahasil.innerHTML = arrNama[0];
    }
});


const hMundur = document.querySelector(".ronde h2");
const hRonde = document.querySelector(".ronde h1");
ruleButton.addEventListener("click", () => {
    animasiHilang(input.parentElement.parentElement);
    // ronde++;
    if (ronde > 3 ) {
        const covFinal = document.querySelector(".final");
        animasiMuncul(covFinal);
    } else {
        buatRonde(ronde);
    }
})


// game
const getPilComp = () => {
    const kom = Math.random();
    if (kom < 0.33) return "gunting";
    if (kom >= 0.33 && kom <= 0.66) return "batu";
    return "kertas";
}

const getHasil = (c, p) => {
    if (p == c) return "SERI!!";
    if (p == "gunting") return (c == "kertas") ? "MENANG!!" : "KALAH!!";
    if (p == "batu") return (c == "gunting") ? "MENANG!!" : "KALAH!!";
    if (p == "kertas") return (c == "batu") ? "MENANG!!" : "KALAH!!";
}

const putar = () => {
    const c = document.querySelector(".area-comp img")
    const gambar = ["gunting", "batu", "kertas"];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(() => {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return
        };
        c.setAttribute("src", `${gambar[i]}.png`);
        i++;
        if (i == gambar.length) {
            i = 0;
        }
    }, 50);
};




const pilihan = document.querySelectorAll(".area-player img");
pilihan.forEach((pil) => {
    pil.addEventListener("click", () => {
        const c = getPilComp();
        const p = pil.className;
        const hasil = getHasil(c, p);

        putar();


        setTimeout(() => {
            const imgComp = document.querySelector(".area-comp img");
            imgComp.setAttribute("src", `${c}.png`);

            const info = document.querySelector(".area-hasil");
            info.innerHTML = hasil;

            const skorComp = document.querySelector(".area-comp span");
            const skorPlayer = document.querySelector(".area-player span");

            if (hasil == "MENANG!!") {
                skorP++;
                if (skorP < 10) {
                    skorPlayer.innerHTML = skorP;
                } else if (skorP == 10) {
                    skorPlayer.innerHTML = 10;
                    setTimeout(() => {
                        simpanHasil(playerFinal, compFinal, arrNama[0], arrP);

                        ronde++;
                        info.innerHTML = "";
                        skorP = 0;
                        skorC = 0;
                        skorPlayer.innerHTML = skorP;
                        skorComp.innerHTML = skorC;

                        buatRonde();
                    }, 30)
                }
            } else if (hasil == "KALAH!!") {
                skorC++;    
                if (skorC < 10) {
                    skorComp.innerHTML = skorC;
                } else if (skorC == 10) {
                    skorComp.innerHTML = 10;
                    setTimeout(() => {
                        simpanHasil(compFinal, playerFinal, "Computer", arrC);

                        ronde++;
                        info.innerHTML = "";
                        skorP = 0;
                        skorC = 0;
                        skorPlayer.innerHTML = skorP;
                        skorComp.innerHTML = skorC;

                        buatRonde();
                    }, 30)
                }
             }

        }, 1000);
    })
})


// bagian akhir 
const refresh = document.querySelector(".refresh");
const exit = document.querySelector(".exit");

refresh.addEventListener("click", () => {
    window.location.reload();
});

exit.addEventListener("click", () => {
    close();
});