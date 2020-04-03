 let reverse= nama => {
    return nama.split("").reverse().join("")
}
let inputNama =window.prompt("Silahkan ketik namamu dibawah ini!")
let reverseNama= reverse(inputNama)
console.log(reverseNama)