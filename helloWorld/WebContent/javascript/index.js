// let v1 = 10;
// console.log(v1);

// let v2 = 20;
// console.log(v2);

const choi = {
    name: '최선영',
    age: 20,
    score: 90
}

const han = {
    name: '한동일',
    age: 21,
    score: 90
}

const yun = {
    name: '윤희성',
    age: 22,
    score: 88
}

// console.log(choi.name);
// console.log(choi['age']); // [ '필드명' ]
// let field = 'score';
// console.log(choi[field]); // choi['score']

const persons = [choi, han, yun];
for(let person of persons){
    document.write('<ul>')
    for(let field in person){
        console.log(person[field]);
        document.write('<li class="' + field +'">' + person[field] + '</li>');
    }
    document.write('</ul>')
}