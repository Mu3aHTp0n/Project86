// №2 напишите функцию которая на вход принимает строку и возвращает длину самого длинного слова в строке

function lengthMostWord(string) {
    const wordsArr = string.split(' ');
    let maxLength = 0;
    wordsArr.forEach(word => {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    });
    return maxLength;
}

export default lengthMostWord;