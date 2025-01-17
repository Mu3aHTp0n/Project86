// №10 Используя рекурсию (без использования циклов). 
// Написать функцию, которая принимает массив и целое число (n) и заполняет массив числами от n до 1.
function recursion(array, n) {
    if (n < 1) return array;
    array.push(n);
    return recursion(array, n - 1);
}
console.log(recursion([], 7));

export default recursion