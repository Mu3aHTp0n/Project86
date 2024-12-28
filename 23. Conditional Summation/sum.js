// №23. Написать функцию, которая суммирует два аргумента вместе. 
// Если указан только один аргумент, то возвращает функцию, которая ожидает второй аргумент и возвращает сумму.
function sum(...props) {
    if (props.length < 2) {
        return (secondProp) => {
            return sum(...props, secondProp);
        };
    }
    return props[0] + props[1];
}
console.log(sum(3, 2));
console.log(sum(3)(2));

export default sum;