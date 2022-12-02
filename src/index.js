/* калькулятор */


const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const sum = document.getElementById('sum');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const result = document.getElementById('result');


sum.onclick = function () {
    const x = +num1.value;
    const y = +num2.value;
    result.innerHTML = (`${x} + ${y} = ${x + y}`);
    num1.value = '';
    num2.value = '';
}

subtract.onclick = function () {
    const x = num1.value;
    const y = num2.value;
    result.innerHTML = (`${x} - ${y} = ${x - y}`);
    num1.value = '';
    num2.value = '';
}

multiply.onclick = function () {
    const x = num1.value;
    const y = num2.value;
    result.innerHTML = (`${x} × ${y} = ${x * y}`);
    num1.value = '';
    num2.value = '';
}

divide.onclick = function () {
    const x = num1.value;
    const y = num2.value;
    if (y == 0) {
    result.textContent = 'На ноль делить нельзя!';
    result.style.color = "red";
} else {
    result.innerHTML = (`${x} ÷ ${y} = ${x / y}`);
    num1.value = '';
    num2.value = '';
}
}