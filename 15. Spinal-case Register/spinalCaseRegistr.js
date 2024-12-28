// №15. Написать функцию, которая конвертирует строку в spinal-case регистр.
function spinalCaseRegistr(str) {
    return str.split(' ').join('-');
}
console.log(spinalCaseRegistr('какая-то строка с n количеством слов в ней'));

export default spinalCaseRegistr;