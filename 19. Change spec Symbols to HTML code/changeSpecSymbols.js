// №19. Написать функцию, которая заменяет символы &, <. >, "(двойные кавычки), и "(апостроф) в строке их соответствующим HTML - кодом.
function changeSpecSymbols(string) {
    return string
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lsaquo;")
        .replace(/>/g, "&rsaquo; ")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}
console.log(changeSpecSymbols("<Какая-то'&строка>"));

export default changeSpecSymbols;