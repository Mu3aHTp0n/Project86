// №12. Написать функцию, которая на вход принимает два массива и возвращает новый массив с элементами найденными только в одном массиве, но не в обоих.
function noDublicate(firstArray, secondArray) {
    const firstArr = new Set(firstArray);
    const secondArr = new Set(secondArray);
    const uniqueEl = [...firstArr, ...secondArr]
        .filter(item => !firstArr.has(item) || !secondArr.has(item));
    return uniqueEl;
}
console.log(noDublicate([2, 4, 5, 7, "いつもひとり"], [2, 4, 6, 7]));

export default noDublicate;