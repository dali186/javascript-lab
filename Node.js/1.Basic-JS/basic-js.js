/* 전통적인 함수 */
function summarizeUser1(userName, userAge, userHasHobby) {
    return (
        'Name is' + userName + ', age is' + userAge
    );
}
/* 익명 함수 */
const summarizeUser2 = function(userName, userAge, userHasHobby) {
    return (
        'Name is' + userName + ', age is' + userAge
    );
}

/* 화살표 함수 */
const summarizeUser3 = (userName, userAge, userHasHobby) => {
    return (
        'Name is' + userName + ', age is' + userAge
    );
}

/* 객체 */
const person1 = {
    name: 'Max',
    age: 29,
    greet: () => {
        console.log('Hi, I am ' + this.name);
    }
};

const person2 = {
    name: 'Max',
    age: 29,
    greet: function() {
        console.log('Hi, I am ' + this.name);
    }
};

const person3 = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

person1.greet();
person2.greet();
person3.greet();

/* 배열 */
const hobbies = ['Sports', 'Cooking'];
for (let hobby of hobbies) {
    console.log(hobby);
}
console.log(hobbies.map(hobby => 'Hooby: ' + hobby));
console.log(hobbies);
/* 배열, 객체, 함수...는 참조 타입으로, 메모리 주소를 가리킨다. (상수라도 수정 오류 X) */

/* 배열의 원본은 유지하고 복사하여 다루는 기법 */
const copiedArray1 = hobbies.slice();
console.log(copiedArray1);

const copiedArray2 = [hobbies];
console.log(copiedArray2);

/* Spread 연산자(...) 은 원소나 속성을 끄집어 낸다. */
const copiedArray3 = [...hobbies];
console.log(copiedArray3);

/* Rest 연산자(...) */
const toArray1 = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
};
console.log(toArray1(1, 2, 3, 4));

/* javascript는 주어진 인수보다 많이 추가해도 이를 허용하지만, 함수는 지정된 인수만 사용 */
const toArray2 = (...args) => {
    return args;
};
console.log(toArray2(1, 2, 3, 4));

/* 객체 구조 분해 */
const printName1 = (personData) => {
    console.log(personData.name);
}
printName1(person3);

/* 관심있는것만 추출 */
const printName2 = ({ name }) => {
    console.log(name);
}
printName2(person3);

const { name, age } = person3;
console.log(name, age);

/* 배열 구조 분해(이름 지정 가능) */
const [hobby1, hobby2] = hobbies;
console.log(hobbies);
console.log(hobby1, hobby2);


/* 비동기화 코드 */
const fetchData1 = callback => {
    setTimeout(() => {
        callback('Done!!');
    }, 1500);
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData1(text => {
        console.log(text);
    });
}, 2000);

console.log('Hello');