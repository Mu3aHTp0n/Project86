// №17. Написать функцию, которая на вход принимает последовательность букв и ищет пропущенные буквы. 
// Если все буквы присутствуют в диапазоне, то возвращается undefined. Например: fearNotLetter("abce") должна вернуть "d"
function fearNotLetter(string) {
    for (let i = 1; i < string.length; i++) {
        if (string.charCodeAt(i) - string.charCodeAt(i - 1) > 1) {
            return String.fromCharCode(string.charCodeAt(i - 1) + 1);
        }
    }
    return undefined;
}
console.log(fearNotLetter('abcdefg'));

export default fearNotLetter;