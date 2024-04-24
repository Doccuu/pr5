// 1
function createGreetingFunction(name) {
    return function() {
        console.log(`Привет, ${name}!`);
    };
}

const greetDima = createGreetingFunction('Дима');
greetDima();





// 2.
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Привет, я ${this.name} и мне ${this.age} лет.`);
};

const person = new Person('Дима', 26);
person.greet();





// 3
function sumRecursive(n) {
    if (n === 1) return 1;
    return n + sumRecursive(n - 1);
}

console.log(sumRecursive(5));





// 4
async function fetchData(url, callback) {
    const response = await fetch(url);
    const data = await response.json();
    callback(data);
}

fetchData('https://jsonplaceholder.typicode.com/posts/1', console.log);





// 5
function greetPerson({ name, age }) {
    console.log(`Привет, ${name}! Тебе ${age} лет.`);
}

const personInfo = { name: 'Дима', age: 26 };
greetPerson(personInfo);





// 6.
function mergeArrays(...arrays) {
    const mergedArray = [].concat(...arrays);
    return [...new Set(mergedArray)];
}

console.log(mergeArrays([1, 2, 3], [3, 4, 5]));





// 7
function addNumberIfNotExists(arr, n) {
    arr = arr || [];
    if (!arr.includes(n)) {
        arr.push(n);
    }
}

const numbers = [1, 2, 3];
addNumberIfNotExists(numbers, 3);
console.log(numbers);





// 8
function getNamesOfUsersUnder30(users) {
    return users
        .filter(user => user.age < 30)
        .map(user => user.name)
        .reduce((acc, name) => acc ? `${acc}, ${name}` : name, '');
}

const users = [
    { name: 'Дима', age: 26, email: 'dima@example.com' },
    { name: 'Кристина', age: 26, email: 'kristina@example.com' },
    { name: 'Даня', age: 18, email: 'danya@example.com' },
    { name: 'Андрей', age: 68, email: 'ded@example.com' }
];

console.log(getNamesOfUsersUnder30(users));
