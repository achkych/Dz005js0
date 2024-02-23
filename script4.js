const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const combined = {};

// Проверяем, что длины массивов совпадают
if (en.length === ru.length) {
    for (let i = 0; i < en.length; i++) {
        combined[en[i]] = ru[i];
    }
}

console.log(combined);

