let ditepati = false; 
const promise1 = new Promise((resolved, rejected) => {
    if (ditepati) {
        resolved(() => {
            data = [1, 2, 3, 4, 5];
            return data.join(" - ");
        });
    } else {
        rejected(() => {
            data = [6, 7, 8, 9, 10];
            return data.join(" - ");
        });
    }
});

console.log(promise1)
console.log("mulai");
promise1
    .then(respon => console.log(respon()))
    .catch(respon => console.log(respon()))
console.log("selesai");
