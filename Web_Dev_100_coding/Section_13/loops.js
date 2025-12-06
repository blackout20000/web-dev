
// for
// 반복문에 유용
for (let i = 0; i < 10; i++) {
    console.log(i);
}


// for of
// 배열의 인자값을 for문으로 반복해서 출력할 때 유용
const users = ['Max', 'Anna', 'Joel'];

console.log(users);

for (const user of users) {
    console.log(user);
}


// for in
// 객체 인자값을 for문으로 반복해서 출력할 때 유용
const loggedInUser = {
    name: 'Max',
    age: 32,
    isAdmin: true
};

for (const propertyName in loggedInUser) {
    console.log(propertyName);
    console.log(loggedInUser[propertyName]);
}


// while
// 특정 조건이 되면 반복문을 실행, 또는 정지

let isFinished = false;

while (!isFinished) {
    isFinished = confirm('Do you want to quit?');
}

console.log('Done!');