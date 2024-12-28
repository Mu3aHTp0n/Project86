// №1 напишите функцию которая принимает на вход целое число и находит его факториал

function factorial(n) {
    if (n < 2) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

module.exports = factorial;