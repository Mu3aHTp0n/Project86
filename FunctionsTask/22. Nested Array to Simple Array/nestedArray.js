// №22. Написать функцию, которая принимает массив различной вложенности и возвращает одномерный массив. 
// Например: steamrollArray([1, [2], [3, [[4]]]) должна вернуть [1, 2, 3, 4].
function nestedArray(array) {
    return array.flat(Infinity);
}
console.log(nestedArray([1, 2, 3, [1, 2, [3, 4, 5], [6, 7, [8, 9]]]]));

export default nestedArray;