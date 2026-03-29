// ОШИБКА 1: Глобальная функция
function submitForm() {
    // ОШИБКА 2: Небезопасное получение элементов
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    // ОШИБКА 3: Нет валидации
    if (name == "" || email == "") {
        // ОШИБКА 4: alert - плохой UX
        alert("Заполните все поля!");
        return;
    }
    
    // ОШИБКА 5: Неправильная проверка email
    if (email.indexOf('@') == -1) {
        alert("Введите корректный email!");
        return;
    }
    
    // ОШИБКА 6: Уязвимость XSS
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "Привет, " + name + "! Email: " + email;
    
    // ОШИБКА 7: Не обрабатываются ошибки
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({name: name, email: email})
    })
    .then(response => response.json())
    .then(data => {
        // ОШИБКА 8: Нет проверки ответа
        console.log(data);
    });
    
    // ОШИБКА 9: Не очищаются поля
}

// ОШИБКА 10: Неиспользуемая функция
function unusedFunction() {
    console.log("Эта функция никогда не вызывается");
}

// ОШИБКА 11: Глобальные переменные
var apiUrl = "https://jsonplaceholder.typicode.com";
var debugMode = true;

// ОШИБКА 12: Магия чисел
setTimeout(function() {
    console.log("Прошло 3 секунды");
}, 3000);