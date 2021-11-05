let value = prompt('Введите целое положительное число');

function minDistr(num) {
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            return i
        }
    }
}


if (!value || value.trim() === '' || isNaN(value)) {
    console.log('введенное значение не является целым положительным числом');
} else if (!Number.isInteger(+value)) {
    console.log('введенное значение является дробным числом');
} else if (value <= 1) {
    console.log('NaN');
} else {
    console.log(minDistr(value));
}