// 1 задание
let cities = document.querySelectorAll('li');
let arr = [];

for (let city of cities) {
    arr.push(city.textContent);
}
arr = JSON.stringify(arr);
console.log(arr);

// 2 задание
let users = '["user1", "user2", "user3", "user4", "user5"]';
users = JSON.parse(users);
users.push('user6');
users = JSON.stringify(users);
console.log(users);

// 3 задание
let info = `[
    {
        "name": "user1",
        "age": 25,
        "salary": 1000
    },
    {
        "name": "user2",
        "age": 26,
        "salary": 2000
    },
    {
        "name": "user3",
        "age": 27,
        "salary": 3000
    }
]`;
let user4 = {
    "name": "user4",
    "age": 28,
    "salary": 4000
}
info = JSON.parse(info);
info.push(user4);
info = JSON.stringify(info);
console.log(info);