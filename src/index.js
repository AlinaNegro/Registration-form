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
    if (y==0) {
    result.textContent = 'На ноль делить нельзя!';
    result.style.color = "red";
} else {
    result.innerHTML = (`${x} ÷ ${y} = ${x / y}`);
    num1.value = '';
    num2.value = '';
}
}

/* изменение темы */

const changeColorBlock = () => {
    switch (document.getElementById("col").value) {
        case "Green": 
        document.body.style.backgroundColor = "#3CB371"; 
        break;
        case "Blue": 
        document.body.style.backgroundColor = "#1E90FF"; 
        break;
        case "Purple": 
        document.body.style.backgroundColor = "#8A2BE2"; 
        break;
    }
}

  /* регистрация */

const form = document.getElementById('form');

const welc = document.getElementById("welcome");
const info = document.getElementById("info_user");

const firstName = document.getElementById("firstname");
const firstNameError = document.getElementById("warnname");

const surname = document.getElementById("surname");
const surnameError = document.getElementById("warnsurname");

const password = document.getElementById("password");
const passwordError = document.getElementById("warnpass");

const passRepeat = document.getElementById("passrepeat");
const passrepeatError = document.getElementById("warnpassrep");

const email = document.getElementById("email");
const emailError = document.getElementById("warnmail");

const checkGender = document.querySelectorAll('input[type="radio"]:checked');
const valueGender = checkGender.length > 0 ? checkGender[0].value : null;
const checkedGenderError = document.getElementById("warngender");

const country = document.getElementById("country");
const countryError = document.getElementById("warncountry");

function checkEmpty(v, err) {
    if (v.value == "") {
        err.innerText = "Поле не должно пустым!";
    } else {
        err.innerText = "";
    }
}

function comparePass(first, second, err) {
    if (first.value !== second.value) {
        err.innerText = "Пароли не совпадают!";
    } else if (!second.value) {
        err.innerText = "Поле не должно пустым!";
    } else {
        err.innerText = "";
    }
}

function checkSelect(sel, err) {
    let selectedCountry = sel.options[sel.selectedIndex].value;
    if (selectedCountry == 0) {
        err.innerText = "Выберите страну";
    } else {
        err.innerText = "";
    }
}

function checkRadio(box, err) {
    if (box != null) {
        err.innerText = "";
    } else {
        err.innerText = "Выберите пол";
    }
}

form.addEventListener('submit', (event) => {

    checkEmpty(firstName, firstNameError);
    checkEmpty(surname, surnameError);
    checkEmpty(password, passwordError);
    checkEmpty(passRepeat, passrepeatError);
    checkEmpty(email, emailError);

    comparePass(password, passRepeat, passrepeatError);
    checkSelect(country, countryError);
    checkRadio(valueGender, checkedGenderError);

    event.preventDefault();
});