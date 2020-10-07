
//!  Module 4

// const askName = function (msg) {
//     let name = prompt("What's your name");

//     console.log(msg + name);
// }



// const greeting = function (callback) {
//     let msg = 'Hello my name is: ';

//     callback(msg);
// }

// greeting(askName)



// const calculator = function (num, callback) {
//     return callback(num);
// }
// const plus = function (num) {
//     return (Number(prompt('Enter your num: ')) + num)
// }
// const minus = function (num) {
//     return (prompt('Enter your num: ') - num)
// }
// let resultPlus = calculator(10, plus);
// console.log(resultPlus);
// let resultMinus = calculator(10, minus);
// console.log(resultMinus);




// const global = function (a, b, callback) {

//     callback(a, b)



// }

// const callback = function (x, y) {

//     console.log(x * y)
//     { x, y }
// }

// global(32, 2, callback);




// const getInfo = function (a, b, callback) {
//     callback(a, b)
//     console.log();
// }

// const getObj = function (name, price) {
//     console.log(`${name} : ${price} euro`);
//     { name, price }
// }


// getInfo("cup", 15, getObj)
// getInfo('plate', 35, getObj)
// getInfo('fork', 6, getObj)




// let money = 85;
// Если стоимость машины меньше money вывести массив машин которые вы можете приобрести
// let cars = [
//     { name: 'ferrari', cost: 100 },
//     { name: 'lambo', cost: 90 },
//     { name: 'bmw', cost: 80 },
//     { name: 'subaru', cost: 60 }
// ]




// const printMessage = function (message) {
//     console.log(message);
// };

// const higherOrderFunction = function (callback) {
//     const msg = 'HOCs are awesome';
//     callback(msg);
// };

// higherOrderFunction(printMessage);




// const mainFunction = function (callback) {
//     const string = 'Veggies are healthy'
//     callback(string)
// }

// const secondFunction = function (message) {
//     console.log(message);
// }

// mainFunction(secondFunction);


// for (let i = 1; i <= 7; i++) {

//     console.log(i);
// }


// const repeatLog = function (n) {
//     for (let i = 1; i <= 7; i++) {
//         console.log(i);

//     }

// }

// repeatLog(5)



// const repeat = function (n, action) {
//     for (let i = 1; i <= n; i++) {
//         action(i);
//     }
// };
// const showValue = function (value) {
//     console.log(value);
// }
// const prettyPrint = function (value) {
//     console.log('Logging value: ', value);
// }

// repeat(5, showValue)
// repeat(5, prettyPrint)



// const first = function () {
//     let name = 'Mimi';
//     let surname = 'Li';

//     const fn2 = function () {
//         console.log(name, surname);
//     }
// }fn2();

// first();





// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// Да, именно таким образом, используя двойные круглые скобки (не опечатка).
// Например:
// sum(1)(2) = 3
// sum(5)(-1) = 4



// !  EXAMPLE
// const sum = function (a) {
//     return function totalSum(b) {
//         console.log(a + b);
//     }
// }

// sum(1)(2)
// sum(5)(-1)
// !



// 1)Напишите ф-цию которая юудет создавать массив машин(оъектов).
// 2)Как только длина массива достигает 5 - масив очищается а обьекты передаються в глобальный массив всех машин.
// 3)Добавте несколько методов: скидка на машину, добавление года к названию.

// const machineArray = function () {
//     let machines = []
//     console.log(machines);

//     if (machines.length >= 5) {
//         machines.splice(0)
//     }


//     const addCar = function (name, price, color) {
//         price = price;
//         machines.push({ name, price, color });
//         console.log(machines);
//     }

//     const discount = function () {
//         for (let el of machines) {
//             el.price *= 0.85;
//         }
//     }

//     const addYear = function () {
//         for (let el of machines) {
//             el.name = `${name} : `;
//         }
//     }


//     return { addCar, discount, addYear }
// }

// let manager = machineArray();

// manager.addCar('Mini Coo', 12000, 'red')
// manager.addCar('Tesla', 28000, 'black')
// manager.addCar('Smart', 10000, 'orange')
// manager.addCar('Beetle', 80000, 'white')
// manager.addCar('Deo Lanos', 3000, 'silver')
// manager.addCar('Smart', 10000, 'turquoise')
// manager.addCar('Smart', 10000, 'purple')
// manager.addYear()

// manager.discount();










// const shopMechanism = function () {
//     let state = [];
//     const addItem = function (name, price, color) {
//         state.push({ name, price, color });
//     }
//     const discount = function () {
//         for (let el of state) {
//             el.price *= 0.9;
//         }
//     }
//     const showCart = function () {
//         console.log(state);
//     }
//     const clearCart = function () {
//         state = [];
//     }
//     return { addItem, discount, showCart, clearCart }
// }
// let customerA = shopMechanism();
// customerA.addItem('Guitar', 100, 'black');
// customerA.addItem('T-shirt', 30, 'black');
// customerA.addItem('Car', 1000, 'black');


//? ------------------ CALLBACK 

const say = function (name, cb) {
    return cb(name);
}
const hi = (user) => `Hi, ${user}`;
const bye = (user) => `Bye, ${user}`;

console.log(say('Max', hi))
console.log(say('J-Lo', bye))




const choose = function (name, action) {
    return action(name)
}

const like = (guest) => `${guest} liked`;
const dislike = function (guest) {
    return `${guest} disliked`
}

console.log(choose('Max', like));
console.log(choose('J-Lo', dislike));



const write = function (message, toDo) {
    return toDo(message);
}



const ask = function (text) {
    return `${text} : yes or no?`
}

// const answer = function (text) {
//     return text
// }

// console.log(write('Like coffee', ask));
// console.log(write('Like filter coffee', ask));
// console.log(write('Like tea', ask));

// ?----------------------------------------------------------------------

// Это ladder(лестница) – объект, который позволяет подниматься вверх и спускаться:

let ladder = {
    step: 5,
    up() {
        this.step++;
        return this

    },
    down() {
        this.step--;
        return this

    },
    showStep: function () { // показывает текущую ступеньку
        console.log(this.step);
        return this

    }
};
// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// // Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
// ladder.up().up().down().up().up().down().showStep();



// ? TASK 2--------------------------------------

// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
// }
// let user = {
//     name: 'Вася',
//     loginOk() {
//         alert(`${this.name} logged in`);
//     },
//     loginFail() {
//         alert(`${this.name} failed to log in`);
//     },
// };


// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// __________________________________________________

// ? TASK 3--------------------------------------------

// Дан массив с числами(Написать самим).Ваша ф - я возвращает среднее арифметическое его элементов

const whoIsAverage = function (array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum / array.length;
}
console.log(whoIsAverage([28, 18, 8, 38]));
// _____________________________________________________
// _____________________________________________________


// ? TASK 4-----------------------------------------------------------
// Напишите функцию f, которая будет обёрткой вокруг другой функции g.
// Функция f обрабатывает первый аргумент сама,
// а остальные аргументы передаёт в функцию g, сколько бы их ни было.
Например:
function f() { /* ваш код */ }
function g(a, b, c) {
    alert(a + b + (c || 0));
}
f("тест", 1, 2); // f выведет "тест", дальше g посчитает сумму "3"
f("тест2", 1, 2, 3); // f выведет "тест2", дальше g посчитает сумму "6"
// Код функции f не должен зависеть от количества аргументов.

const f = function () {

}

const g = function (a, b, c)







// ___________________________________________________________________
// ___________________________________________________________________



// ? TASK 5 ------------------------------------------------------------
