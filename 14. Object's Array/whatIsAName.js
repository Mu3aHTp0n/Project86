// №14. Создайте функцию, которая просматривает массив объектов (первый аргумент)
// и возвращает массив всех объектов, имеющих совпадающие пары имя и значение (второй аргумент). 
// Например: whatlsinAName([{"apple": 1, "bat": 2 }, { "apple": 1 }, {"apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) 
// должен вернуться [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]
function whatIsAName(array, object) {
    return array.filter(obj => {
        for (const key in object) {
            if (!obj.hasOwnProperty(key) || obj[key] !== object[key]) {
                return false;
            }
        }
        return true;
    });
}
console.log(whatIsAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 }));

export default whatIsAName;