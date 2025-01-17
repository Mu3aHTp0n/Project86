// №8 Написать функцию, которая на вход принимает массив, состоящий из двух строк. 
// Функция должна вернуть true, если строка в первом элементе массива содержит все буквы строки во втором элементе массива (регистр игнорируется)
function checkLetters(array) {
    firstStr = array[0].toLowerCase();
    secondStr = array[1].toLowerCase();
    for (let i = 0; i < secondStr.length; i++) {
        if (!firstStr.includes(secondStr[i])) {
            return false;
        }
    }
    return true;
}
// console.log(checkLetters(['Съешь ещё этих мягких французских булочек, да выпей чаю', 'абвгдеёзийклмнопрстуфхцчщшъыьэюя']));

export default checkLetters;