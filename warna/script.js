// container 1--------------------------
const button = document.querySelector(".container1 button");

button.addEventListener("click", (e) => {
    let merah = Math.floor(Math.random() * 255);
    let hijau = Math.floor(Math.random() * 255);
    let biru = Math.floor(Math.random() * 255);
    e.target.parentElement.style.backgroundColor = `rgb(${merah}, ${hijau}, ${biru})`;
    console.log(`\nmerah : ${merah}\nhijau : ${hijau}\nbiru : ${biru}`);
});




// container 2--------------------------
// ambil slider
const merah = document.querySelector(".container2 .input input[name = merah]");
const hijau = document.querySelector(".container2 .input input[name = hijau]");
const biru = document.querySelector(".container2 .input input[name = biru]");

const hilang = (remove, add) => {
    const hasil = document.getElementById("hasil");
    hasil.classList.remove(remove);
    hasil.classList.add(add);
};

// event kotak
merah.addEventListener("input", (e) => {
    e.target.parentElement.previousElementSibling.style.backgroundColor = `rgb(${e.target.value}, 0, 0)`;
    hilang("hasil", "none");
    e.target.previousElementSibling.innerHTML = e.target.value;
    e.target.previousElementSibling.style.display = "block";
});
hijau.addEventListener("input", (e) => {
    e.target.parentElement.previousElementSibling.style.backgroundColor = `rgb(0,${e.target.value}, 0)`;
    hilang("hasil", "none");
    e.target.previousElementSibling.innerHTML = e.target.value;
    e.target.previousElementSibling.style.display = "block";
});
biru.addEventListener("input", (e) => {
    e.target.parentElement.previousElementSibling.style.backgroundColor = `rgb(0, 0, ${e.target.value})`;
    hilang("hasil", "none");
    e.target.previousElementSibling.innerHTML = e.target.value;
    e.target.previousElementSibling.style.display = "block";
});

// event button
const tom = document.querySelector(".container2 button");
tom.addEventListener("click", (e) => {
    e.target.parentElement.style.backgroundColor = `rgb(${merah.value}, ${hijau.value}, ${biru.value})`
    hilang("none", "hasil");
    const p1 = document.getElementById("p1");
    const p2 = document.getElementById("p2");
    const p3 = document.getElementById("p3");

    p1.innerHTML = `merah : ${merah.value}`;
    p2.innerHTML = `hijau : ${hijau.value}`;
    p3.innerHTML = `biru : ${biru.value}`;
    
    const spann = document.getElementsByTagName("span");
    for (let i = 0; i < spann.length; i++) {
        spann[i].style.display = "none";
    };

})


// container 3--------------------------
const nama = document.querySelector(".container3 input[name = nama]");
const tomb = nama.nextElementSibling;
const arrNama = [];

tomb.addEventListener("click", () => { 
    arrNama.push(nama.value);
    console.log(arrNama.join(" - "));
    nama.value = "";
})


// warna body
document.body.addEventListener("mousemove", (ev) => {
    const sumX = Math.round((ev.clientX / window.innerWidth) * 255);
    const sumY = Math.round((ev.clientY / window.innerHeight) * 255);

    document.body.style.backgroundColor = `rgb(${sumX}, ${sumY}, 100)`
})
