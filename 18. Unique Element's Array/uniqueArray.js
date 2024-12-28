// №18. Написать функцию, которая принимает два или более массивов и возвращает новый массив уникальных значений. 
// Значения должны быть отсортированы по их первоначальному порядку.
function uniqueArray(...props) {
    let unique = {};
    return props.flat().filter(item => {
        if (!unique[item]) {
            unique[item] = true;
            return true;
        }
        return false;
    });
}
console.log(uniqueArray([1, 2, 3, 4], [1, 3, 5, 6], [1, 2, 3]));

export default uniqueArray;