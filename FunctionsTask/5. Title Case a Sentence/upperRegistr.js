// №5 Написать функцию которая на вход принимает строку и возвращает эту строку в формате: каждое слово с заглавной буквы, остальные в нижнем регистре
function upperRegistr(string) {
    const arr = string.split(' ');
    let str = '';
    arr.forEach(element => {
        str += element[0].toUpperCase() + element.slice(1, element.length) + " ";
    });
    return str;
}
// console.log(upperRegistr('тестовая строка для смены регистра'));

export default upperRegistr;