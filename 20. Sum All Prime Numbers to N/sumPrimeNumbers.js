// №20. Написать функцию, которая суммирует все простые числа до n (аргумент функции) 
function sumPrimeNumbers(n) {
    let totalSum = 0;
    nextPrime: for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        totalSum += i;
    }
    return totalSum;
}
console.log(sumPrimeNumbers(50));

export default sumPrimeNumbers;