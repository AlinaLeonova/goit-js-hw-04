// ------------TASK1
//? Напишите функцию min(a, b), которая возвращает меньшее из чисел a и b.

const showMin = function (a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(showMin(2, 5));
console.log(showMin(3, -1));
console.log(showMin(1, 1));
console.log(showMin(28, 19));
console.log(showMin(-35, -37));
//? _________________________

// -------------------TASK2
//? Напишите функцию pow(x, n), которая возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.

const fn = function (x, n) {
    let result = x;

    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result
}
console.log(fn(3, 3));
//? ________________________

// -------------------TASK3

//? ________________________

// -------------------TASK4

//? ________________________



