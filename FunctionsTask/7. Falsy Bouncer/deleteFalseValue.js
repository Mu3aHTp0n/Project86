// №7 Написать функцию, которая на вход принимает массив и удаляет в нем все "ложные значения"
function deleteFalseValue(array) {
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}
// console.log(deleteFalseValue([0, -0, false, null, undefined, 1, true, NaN, '', " "]));

export default deleteFalseValue;