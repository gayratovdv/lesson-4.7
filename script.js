const array = ["Mars", "Yupiter", "Saturn", "Uran"];
let long = array.length;
console.log(array);
alert("Arrayning uzunligi: " + long)

let result = confirm("Sizning arrayingizdan ma'lumotlarni olib tashlamoqchimiz")

if (result) {
    array.pop()
    const information = ["Mars", "Yupiter", "Saturn"] 
    let remove = array.length;
    alert("Arrayning uzunligi: " + remove)
    console.log(information);
}else {
    let remove = array.length;
    alert("Arrayning uzunligi: " + remove)
    console.log(array);
}