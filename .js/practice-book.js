const arr = [];
console.log(arr);

// const friends = ['Dasha', 'Masha', 'Kristina']

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends);


// friends[2] = "New friend"
// console.log(friends);

// friends[3] = 'Yana';
// console.log(friends);

// console.log(friends.length);

// friends.length = 4;
// console.log(friends);



const friends = ['Dasha', 'Masha', 'Kristina', 'Yana']
for (let i = 0; i < friends.length; i++) {
    console.log('Current friend: ', friends[i]);
}


// const numbers = [];

// for (let i = 0; i < 5; i++) {
//     numbers.push(`label-${i}`);
// }
// console.log(numbers);


//? --------- Итерация по массиву

// const students = ['Ostap', 'Alex', 'Max'];
// for (const student of students) {
//     console.log(student);
// }

//? -------- Итерация по строке
// const string = 'Luna';
// for (const letter of string) {
//     console.log(letter);
// }



// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Max';
// let message = 'Клиента с таким именем нету в базе данных!';

// for (const client of clients) {
//     if (client === clientNameToFind) {
//         message = 'Клиент с таким именем есть в базе данных!';
//         break;
//     }

//     //  Если не совпадает, то на этой итерации ничего не делаем
// }

// console.log(message); // Клиент с таким именем есть в базе данных!


// const workers = ['Max', 'Alex', 'John'];
// const workerToFind = 'Sue';
// message = 'Worker is not found :('

// for (const worker of workers) {
//     if (worker === workerToFind) {
//         message = "Worker is found :)";
//         break
//     }
// }

// console.log(message);



//? ------split
// const message = 'Hi, Lilu!';

// // Разбивает строку по разделителю, в данном случае это пробел
// console.log(message.split(' ')); // ["Welcome", "to", "Bahamas!"]

// // Вызов split с пустой строкой разобьёт по буквам
// console.log(message.split('')); // [много букв :)]

//? -------join
// const clients = ['Mango', 'Poly', 'Ajax'];

// // Сошьет все элементы массива в строку,
// // между каждой парой элементов будет указанный разделитель
// console.log(clients.join(' ')); // "Mango Poly Ajax"
// console.log(clients.join(',')); // "Mango,Poly,Ajax"
// console.log(clients.join('-')); // "Mango-Poly-Ajax"


// ! FUNCTIONS

// const add = function (a, b, c) {
//     return a + b + c;
// };


// const result = add(2, 7, 18);
// console.log(result);

// console.log(add(29, 33, 17));



const count = function (countFrom = 0, countTo = 10, step = 1) {
    console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

    for (let i = countFrom; i <= countTo; i += step) {
        console.log(i);
    }
};

count(1, 5); // countFrom = 1, countTo = 5, step = 1
count(2); // countFrom = 2, countTo = 10, step = 1
// count(undefined, 5, 2); // countFrom = 0, countTo = 5, step = 2
// count(); // countFrom = 0, countTo = 10, step = 1


//? -----------------------------------------------------------

function showThis() {
    console.log('this in showThis: ', this);
}

// Вызываем в глобальном контексте
showThis();
// this in showThis: Window

const user = { name: 'Mango' };

/*
 * Записываем ссылку на функцию в свойство объекта
 * Обратите внимание, что это не вызов - нет ()
 */
user.showContext = showThis;

/*
 * Вызываем функцию в контексте объекта
 * this будет указывать на текущий объект, в контексте
 * которого осуществляется вызов, а не на глобальный объект.
 */

user.showContext();
// this in showThis: {name: "Mango", showContext: ƒ}
