let value = prompt('Введите целое положительное число');

function minDistr(num) {
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            return i
        }
    }
}


if (!value || value.trim() === '' || isNaN(value)) {
    alert('введенное значение не является целым положительным числом');
} else if (!Number.isInteger(+value)) {
    alert('введенное значение является дробным числом');
} else if (value <= 1) {
    alert('NaN');
} else {
    alert(minDistr(value));
}