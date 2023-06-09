

Домашка:

// 1.  Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.

//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
//     (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

let hamburgers = 2;
let fries = 3;

if(hamburgers >= 3 && fries >= 3){
    console.log("Ми поїли")
} else {
    console.log("Ми йдемо в інше кафе")
}




// 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//     Результат виводити в консоль.


let price = 1500
if(price >= 1000 && price <= 1900){
    console.log("the price is between 1000 and 1900")
} else {
    console.log("the price is not between 1000 and 1900")
}



// 3.  Напишіть конструкцію if, що перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//     Результат виводити в консоль.

          // 1st variant
let price1 = 900
if(price1 >= 1000 && price1 <= 1900){
    console.log("the price is between 1000 and 1900")
} else {
    console.log("the price is not between 1000 and 1900")
}

        //2d variant with "!"
let price2 = 2000
if(!(price2 >= 1000 && price2 <= 1900)){
    console.log("the price is not between 1000 and 1900")
} else {
    console.log("the price is between 1000 and 1900")
}



// 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.

let month = 12;
if(month === 1){
    console.log("It's January")
} else if(month === 2){
    console.log("It's February") 
} else if(month === 3){
    console.log("It's March")
} else if(month === 4){
    console.log("It's April")
} else if(month === 5){
    console.log("It's May")
} else if(month === 6){
    console.log("It's June")
} else if(month === 7){
    console.log("It's July")
} else if(month === 8){
    console.log("It's August")
} else if(month === 9){
    console.log("It's September")
} else if(month === 10){
    console.log("It's October")
} else if(month === 11){
    console.log("It's November")
} else if(month === 12) {
    console.log("It's December")
}




// 5.  Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє між цими трьома числами
//     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//     Використати вкладені оператори if
//     Результат виводити в консоль.

let a = 10;
let b = 20;
let c = 30;

if(a > b) {
    if (a < c){
        console.log(a)
    } else {
        console.log(c)}
} else if(b > a){
    if(b < c){
        console.log(b)
    } else {
        console.log(a)
    }
} else if(c > a) {
    if(c < b){
        console.log(c)
    } else {
        console.log(b)
    }
}




// 6.  Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.

let day = 7;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday")
        break;

}


// 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.

let num = 10
let num1 = 2
let math = "/"
switch(math){
    case "+":
        console.log(num+num1);
        break;
    case "-":
        console.log(num-num1);
        break;
    case "*":
        console.log(num*num1);
        break;
    case "/":
        console.log(num/num1);
        break;
}


// 8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

let str = "JavaScript";
let result = str.replace(/[ai]/g, '')
console.log(result)


// 9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закінченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

//     Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)

let meters = 2000;
let km = meters/1000;
if(km === 1){
    console.log( meters + " метрів це " + km + " кілометр")
}else if(km > 1){
    console.log(meters + " метрів це " + km + " кілометри")
} else if(km < 1){
    console.log(meters + " метри це " + km + " кілометра" )
}
    