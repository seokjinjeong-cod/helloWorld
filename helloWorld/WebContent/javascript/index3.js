//index3.js
let messages = ['Hello', 'Good Morning', 'Hi']

let ulTag = document.createElement('ul'); // ul
// ulTag.innerHTML = '<li>Hello</li>';

for (let i = 0; i < messages.length; i++) {
    let liTag = document.createElement('li');
    liTag.innerHTML = messages[i];
    ulTag.appendChild(liTag);
}

// div에 자손으로 ul태그를 붙임
let divShow = document.getElementById('show');
divShow.appendChild(ulTag);

let fruits = [{
    name: '사과',
    price: 1000,

}, {
    name: '바나나',
    price: 2000,

}, {
    name: '체리',
    price: 3000
}];

let divFruit = document.getElementById('fruit')
let ulTag2 = document.createElement('ul'); // ul
for (let fruit of fruits) {
    let liTag2 = document.createElement('li');
    liTag2.innerHTML = fruit.name + ', ' + fruit.price;
    ulTag2.appendChild(liTag2);
}
divFruit.appendChild(ulTag2);

//div찾기.
let num = 9;    //단수

let multi = document.getElementById('multi');
let table = document.createElement('table');
let tr = document.createElement('tr');
let td = document.createElement('th');

td
.innerHTML = num + '단';
tr.appendChild(td);
table.appendChild(tr);

table.setAttribute('border', '1');

for (let i = 1; i <= 9; i++) {
    tr = document.createElement('tr')
    td = document.createElement('td')
    td.innerHTML = num + 'x' + i + '=' + num*i;
    tr.appendChild(td);
    table.appendChild(tr);
}
multi.appendChild(table);