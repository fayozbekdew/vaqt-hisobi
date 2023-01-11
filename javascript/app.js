// const dob = 2001
// let ismim = "Fayozbek"
// let familya = "Borotboyev"
// let tel = 998941213399
// let live = "Fergana"
// let from = "Namangan"

// const dob = prompt("Tugilgan yilingizni kiriting")
// let ismim = prompt("Ismingizni kiriting")
// let familya = prompt("Familyangizni kiriting")
// let live = prompt("Yashash joyingizni kiriting")

// let natija = `Salom, mening ismim ${ismim}. Yoshim ${ `2023` - dob} da. Hozirgi kunda ${live} yashayman.`

// console.log(natija)

// console.log( "Salom, mening ismim" + " " + familya + " " + ismim + ". Yoshim" + (2023 - dob) + "da")


let headingBtn = document.querySelector(".btn")
let text = document.querySelector(".text")
let container = document.querySelector(".hero__container")
let closeBtn = document.querySelector(".btnclose")
const dob = prompt("Tugilgan yilingizni kiriting");
let ism = prompt("Ismingizni kiriting");
ism = (ism.toUpperCase())
let yosh = (`2023` - dob);
let oy = ( yosh * 12 );
let hafta = ( oy * 4 );
let kun = ( hafta * 7 );
let soat = ( kun * 24 );
let daqiqa = ( soat * 60 );
let soniya = ( daqiqa * 60);


let natija = `Qadirli ${ism} siz ${ yosh } yil, ${ oy } oy, ${ hafta } hafta, ${ kun } kun, ${ soat } soat, ${ daqiqa} daqiqa, ${ soniya} soniya yashadingiz !`

headingBtn.addEventListener("click", ()=> {
    container.style.display = "block"
    text.textContent = natija;
})

closeBtn.addEventListener("click", () => {
    window.location.reload()
})

// document.querySelector(`btn`).addEventListener(`click`, ()=> {alert( ${natija})})