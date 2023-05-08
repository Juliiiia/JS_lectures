let a = 5;
let b = 3;
let c;

c = a + b;

console.log(c);

/// some code


a = 8;
b = 12;

c =  a + b;
console.log(c);

function sum (a, b){ //ключове слове (function), назва функції
    let c = a + b;
    console.log(c);
}

sum(8, 12)
sum(3, 12)
sum(384746, 12)

// функції бувають іменовані,анонімні, присвоєні змінні, аргументом при виклику іншої функції, або властивістю об*єкта

function sum (a, b){ //ключове слове (function), назва функції
    let c = a + b;
    return c; //return - повертає результат функції. Після цієї команди припиняє своє виконання
    console.log(c);
    console.log('djdc')
}

console.log(sum(8,12)) //результат буде виводитись при return
// у виклику записуємо назву функції та аргументи

//якщо функція не повертає ніякого результату, вона буде повертати значення undefined

let sumVar = sum(8, 12);
console.log("sumVar = " + sumVar);



//function (a, b){ 
//    let c = a + b;  // анонімна функція. Щоб працювало треба її присвоїти змінній
    console.log(c);

const anonimFunc = function (a,b){
    let c = a+b;
    console.log(c);
}

anonimFunc(1,2);

() => {
         // анонімна стрілочна функція (мають інший синтаксис, не мають ключового слова function)
}
 
anonimFunc(1, 2)

const arrowFunc = (a,b) => {
    let c = a + b;
    console.log(c)
}
arrowFunc(1,2);


// зробити функцію більш універсальною

const funcWithDefaultParam = (a, b = 2) => {
    return (a * b)
}

console.log(funcWithDefaultParam(3, 5))
console.log(funcWithDefaultParam(3))


console.log(Date())


const myRequestisWithDate = (field1, timestamp = Date()) => {
    let requestBody = {
        someData: 1,
        someData2: 2,
        timestamp: ""
    }

    requestBody.someData = field1;
    requestBody.timestamp = timestamp;

    return requestBody;
    
}

console.log(myRequestisWithDate('qweqwe', '8347729374299'))


const playWithReturnFunc = () => {                    
    for(let i = 0; i < 8; i++){
        console.log(i);
        if(i === 6){
            return 'uhiuhui'
        }
    }
}

console.log(playWithReturnFunc());

// інший варіант
// const playWithReturnFunc = () => {
//     for(let i = 0; i < 8; i++){
//         console.log(i);
//         if(i === 6){
//             return 
//         }
//     }
// }

// playWithReturnFunc();


function request1(){
    setTimeout(function(){;
    console.log('First');
}, 5000)
}

function request2(){
    console.log('Second')
}

request1();
request2(); // спочатку виведеться друга функція, вона не чекатиме першу :(


//setTimeout(someFunc, 5000) // виводить текст із затримкою


function someFunctionWithCallBack(param1, callbackFunction){
    console.log(`Here is my parameter: ${param1}`);
    callbackFunction();
}

someFunctionWithCallBack('parampaasd', function(){
    console.log('Text from callback')
}) 


function it (testDescription, testActions){
    console.log(`Here is my test description: ${testDescription}`);
    testActions();
}

it('Auth test', ()=> {
   console.log('Some test actions....') // так виглядає функція яку ми створюємо в якості тесті в Cypress

})
