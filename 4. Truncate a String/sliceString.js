// №4 напишите функцию которая на вход принмает строку и целое число и обрезает строку (первый аргуемент),
// если она длинее заданнной максимальной длины строки (второй аргумент) и возвращает обрезанную строку с "..." в конче
function sliceString(str, num) {
    if (str.length > num) {
        str = str.slice(0, num);
    }
    return str + '...';
}
// console.log(sliceString('Здрасьте, Антон!', 12))

export default sliceString;