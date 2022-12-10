// Опишіть своїми словами, що таке екранування, і навіщо воно потрібне в мовах програмування
// в мовах програмування є символи, що допомагають писати код та мають якесь значення, але для того щоб зобразити їх на екрані потрібно їх "екранувати"(поставти обратний слеш \)
// Які засоби оголошення функцій ви знаєте?
// function definition, чи function declaration, function statement, що містять: ім'я функції, список параметрів(що функція приймає у ()) та що саме має зробити після визова функції(відбувається у {})
// Що таке hoisting, як він працює для змінних та функцій?
// підняття функції, що пересуваеться вгору своєї області видимості перед тим, як код буде виконано

// Завдання
// Доповнити функцію createNewUser() методами підрахунку віку користувача та його паролем. Завдання має бути виконане на чистому Javascript без використання бібліотек типу jQuery або React.

// Технічні вимоги:
// Візьміть виконане домашнє завдання номер 5 (створена вами функція createNewUser()) і доповніть її наступним функціоналом:
// При виклику функція повинна запитати дату народження (текст у форматі dd.mm.yyyy) і зберегти її в полі birthday.
// Створити метод getAge() який повертатиме скільки користувачеві років.
// Створити метод getPassword(), який повертатиме першу літеру імені користувача у верхньому регістрі, з'єднану з прізвищем (у нижньому регістрі) та роком народження. (наприклад, Ivan Kravchenko 13.03.1992 → Ikravchenko1992.
// Вивести в консоль результат роботи функції createNewUser(), а також функцій getAge() та getPassword() створеного об'єкта.


function createNewUser(){
    const name = prompt('your name\'s?')
    const lastname = prompt("your lastname?")
    const data = prompt("датa рождения в формате dd.mm.yyyy?")
    return {
        name, 
        lastname, 
        data,
        getLogIn(){
            return (this.name[0] + this.lastname).toLowerCase()
        },
        getPassword(){
         return ((this.name[0]).toUpperCase()) + ((this.lastname).toLowerCase()) + this.data.slice(6)
        }, 
        getAge(){
            const newData = new Date() 
                let day = newData.getDay(); 
                let month = newData.getMonth();
                let year = newData.getFullYear(); 
             let dayOfBirth = this.data.slice(0, 2)
             let monthOfBirth = this.data.slice(3, 5)
                monthOfBirth--
             let yearOfBirth = this.data.slice(6)
                let age = year - yearOfBirth
                if (monthOfBirth > month || (monthOfBirth === month && dayOfBirth > day)){
                    age--
                } 
                return age;
        }
    }
}
const newUser = createNewUser()
console.log(newUser.getLogIn())
console.log(newUser.getAge())
console.log(newUser.getPassword())