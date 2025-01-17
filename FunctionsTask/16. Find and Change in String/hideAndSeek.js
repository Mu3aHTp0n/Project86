// №16. Написать функцию, которая осуществляет поиск и замену в предложении.
// Первый аргумент - это строка, в которой осуществляется поиск и замена.
// Второй аргумент - это слово, которое нужно заменить, третий аргумент - слово, на которое нужно заменить. 
// При замене сохраняйте регистр первого символа в исходном слове.
function hideAndSeek(string, change, toChange) {
    let someArray = string.split(' ');
    for (let element of someArray) {
        if (element.toLowerCase() === change.toLowerCase()) {
            if (change[0].toLowerCase() !== change[0]) {
                toChange = toChange[0].toUpperCase() + toChange.slice(1);
            } else toChange = toChange.toLowerCase();
            someArray[someArray.indexOf(element)] = toChange;
        };
    }
    return someArray.join(' ');
}
console.log(hideAndSeek("строка в которой проводится поиск и замена", "Строка", "String"));

export default hideAndSeek;