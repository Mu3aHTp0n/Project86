// №13. Написать функцию, которая на вход принимает массив и еще один или несколько аргументов (точное количество не известно). 
// Удалить из массива все элементы, которые имеют то же значение, что и эти аргументы.
function removeElements(array, ...props) {
    return array.filter(item => !props.includes(item));
}
console.log(removeElements([1, 2, 3, 4, 5, 6, 7, 8], 2, 4, 6, 7, 8));

export default removeElements;