function map(array, foo) {
    let newArray = [];
    for (const element of array) {
        newArray.push(foo(element));
    }
    return newArray;
}
// console.log(map([1, 2, 3, 4, 5, 6], function (n) { return n * n }));

function filter(array, foo) {
    let newArray = [];
    array.forEach(element => {
        if (foo(element)) {
            newArray.push(element);
        }
    });
    return newArray;
}
// console.log(filter([1, 2, 3, 4, 5, 9], function (n) { return n % 2 !== 0; }));


function find(array, element) {
    for (const item of array) {
        if (item === element) {
            return item;
        }
    }
    return 'Элемент не найден';
}
// console.log(find([
//     'смотреть сериальчики',
//     'читать книгу',
//     'пить кофе',
//     'гладить кота',
//     'гулять',
//   ], 'гладить кот'));

function some(array, foo) {
    for (const element of array) {
        if(foo(element)) return true;
    }
    return false;
}
// console.log(some([1, 3, 5, 7, 8, 9], function (n) { return n > 9; }));

function every(array, foo) {
    for (const element of array) {
        if(!foo(element)) return false;
    }
    return true;
}
// console.log(every([1, 3, 5, 7, 9], function (n) { return n % 2 !== 0; }));

export {map, filter, find, some, every};