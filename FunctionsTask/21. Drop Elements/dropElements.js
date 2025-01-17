// №21. Написать функцию, которая принимает массив и функцию и удаляет каждый элемент массива начиная с первого, 
// пока функция не вернет true, а затем возвращает оставшуюся часть массива. 
// Например: dropElements([1, 2, 3, 4], function(n) {return n >= 3:}) должна вернуть [3, 4]. 
function dropElements(array, foo) {
    const index = array.findIndex(foo);
    for (let i = 0; i < index; i++) {
        array.shift();
    }
    return array;
}
console.log(dropElements([1, 2, 3, 4], function (n) { return n >= 3; }));

export default dropElements;