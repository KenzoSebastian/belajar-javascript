// // contoh 1
// function satu() {
//     console.log("satu")
// }
// function dua() {
//     // settimeout merupakan async
//     setTimeout(() => {
//         console.log("dua")
//     },1000)
// }
// function tiga() {
//     console.log("tiga")
// }

// satu()
// dua()
// tiga()










// contoh 2
// const token = Math.floor(Math.random() * 1234567);


// function login(username) {
//     return { token, username };
// }

// function getuser(token) {
//     return {apiKey: "kenzo123"}
// }

// function getpic(apikey) {
//     return {picture:["1.png", "2.jpg", "3.jpg"]}
// }

// const user = login("kenzo sebastian");
// console.log(user)

// const apikey = getuser(user.token)
// console.log(apikey)

// const pic = getpic(apikey.apiKey).picture
// console.log(pic)














// callback
// const token = Math.floor(Math.random() * 1234567);


// function login(username, callback) {
//     console.log("processing token now....")
//     setTimeout(() => {
//         callback ({ token, username });
//     }, 2000)
// }

// function getuser(token, callback) {
//     console.log("processing apikey now....")
//     if (token) {
//         setTimeout(() => {
//             callback ({ apiKey: "kenzo123" })
//         }, 2000);
//     }
// }

// function getpic(apikey, callback) {
//     console.log("processing pictures now....")
//     if (apikey) {
//         setTimeout(() => {
//             callback ({ picture: ["1.png", "2.jpg", "3.jpg"] })
//         }, 2000);
//     }
// }

// login("kenzo sebastian", function (responseLogin) {
//     console.log(responseLogin)
//     console.log("proses login anda berhasil, token anda : " + responseLogin.token)

//     getuser(responseLogin.token, function (responseUser) {
//         console.log(responseUser)
//         console.log("pengambilan apikey anda berhasil, apikey anda : " + responseUser.apiKey)

//         getpic(responseUser.apiKey, function (responsePic) {
//             console.log(responsePic)
//             console.log("pengambilan gambar anda berhasil, gambar anda : " + responsePic.picture)
//         })
//     })
// });








// promise
// const token = Math.floor(Math.random() * 1234567);


// function login(username) {
//     console.log("processing token now....")
//     return new Promise((success, failed) => {
//         if (username !== "Kenzo Sebastian") failed("helehhh, username salah bang!!!")
//         setTimeout(() => {
//             success({token, username})
//         }, 2000)
//     })
// }

// function getuser(token) {
//     console.log("processing apikey now....")
//     return new Promise((success, failed) => {
//         if (!token) failed("token nya mana woiii!!")
//         setTimeout(() => {
//             success({ apiKey: "kenzo123" })
//         }, 2000);
//     })
    

// }

// function getpic(apikey) {
//     console.log("processing pictures now....")
//     return new Promise((success, failed) => {
//         if (!apikey) failed("APIkey nya mana cuyyy!!!")
//         setTimeout(() => {
//             success({ picture: ["1.png", "2.jpg", "3.jpg"] })
//         }, 2000);
//     })
    
// }



// const user = login("Kenzo Sebastian")
// user.then((responseLogin) => {
//     console.log(responseLogin)
//     console.log("proses login anda berhasil, token anda : " + responseLogin.token)

//     const apikey = getuser(responseLogin.token)
//     apikey.then((responseUser) => {
//         console.log(responseUser)
//         console.log("pengambilan apikey anda berhasil, apikey anda : " + responseUser.apiKey)

//         const pic = getpic(responseUser.apiKey)
//         pic.then((responsePic) => {
//             console.log(responsePic)
//             console.log("pengambilan gambar anda berhasil, gambar anda : " + responsePic.picture)
//         }).catch( error => console.log(error))

//     }).catch(error => console.log(error))

// }).catch( error => console.log(error))











// async and await
const token = Math.floor(Math.random() * 1234567);


function login(username) {
    console.log("processing token now....")
    return new Promise((success, failed) => {
        if (username !== "Kenzo Sebastian") failed("helehhh, username salah bang!!!")
        setTimeout(() => {
            success({ token, username })
        }, 2000)
    })
}

function getuser(token) {
    console.log("processing apikey now....")
    return new Promise((success, failed) => {
        if (!token) failed("token nya mana woiii!!")
        setTimeout(() => {
            success({ apiKey: "kenzo123" })
        }, 2000);
    })


}

function getpic(apikey) {
    console.log("processing pictures now....")
    return new Promise((success, failed) => {
        if (!apikey) failed("APIkey nya mana cuyyy!!!")
        setTimeout(() => {
            success({ picture: ["1.png", "2.jpg", "3.jpg"] })
        }, 2000);
    })

}

async function tampilanKonsol() {
    try {
        const { token } = await login("Kenzo Sebastian")
        console.log("token anda adalah " + token)
        const { apiKey } = await getuser(token)
        console.log("APIKey anda adalah " + apiKey)
        const { picture } = await getpic(apiKey)
        console.log("request gambar anda adalah " + picture)
    } catch (error) {
        console.log(error)
    }
    

} 

tampilanKonsol()
